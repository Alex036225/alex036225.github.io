const fs = require("node:fs");
const path = require("node:path");

const DEFAULT_ALLOWED_ORIGINS = [
  "https://alex036225.github.io",
  "http://127.0.0.1:4000",
  "http://localhost:4000"
];

let cachedContext;
let cachedScholarContext;
let cachedScholarContextAt = 0;

const SCHOLAR_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const SCHOLAR_DATA_URLS = [
  "https://cdn.jsdelivr.net/gh/Alex036225/alex036225.github.io@google-scholar-stats/gs_data.json",
  "https://raw.githubusercontent.com/Alex036225/alex036225.github.io/google-scholar-stats/gs_data.json"
];

function getContext() {
  if (!cachedContext) {
    cachedContext = fs.readFileSync(path.join(process.cwd(), "ai/profile-context.md"), "utf8");
  }
  return cachedContext;
}

function getAllowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || DEFAULT_ALLOWED_ORIGINS.join(","))
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function resolveOrigin(requestOrigin) {
  if (!requestOrigin) return DEFAULT_ALLOWED_ORIGINS[0];
  return getAllowedOrigins().includes(requestOrigin) ? requestOrigin : null;
}

function setCors(response, origin) {
  response.setHeader("Access-Control-Allow-Origin", origin);
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Vary", "Origin");
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((message) => message && (message.role === "user" || message.role === "assistant"))
    .slice(-8)
    .map((message) => ({
      role: message.role,
      content: String(message.content || "").slice(0, 1200)
    }));
}

function sendJson(response, statusCode, payload) {
  response.status(statusCode).json(payload);
}

function formatScholarContext(data) {
  const publications = Object.values(data.publications || {})
    .map((publication) => ({
      title: publication.bib?.title || publication.title,
      venue: publication.bib?.venue || publication.bib?.journal || publication.bib?.conference,
      year: publication.bib?.pub_year || publication.bib?.year,
      citations: publication.num_citations
    }))
    .filter((publication) => publication.title)
    .sort((a, b) => Number(b.citations || 0) - Number(a.citations || 0))
    .slice(0, 12);

  const lines = [
    "## Cached Google Scholar Data",
    "This section is loaded from Bo Zhao's cached Google Scholar data. Citation counts may lag behind Google Scholar.",
    `- Scholar profile name: ${data.name || "Bo Zhao"}.`,
    `- Total citations: ${data.citedby ?? "unavailable"}.`,
    `- h-index: ${data.hindex ?? "unavailable"}.`,
    `- i10-index: ${data.i10index ?? "unavailable"}.`,
    `- Cache updated at: ${data.updated || "unavailable"}.`
  ];

  if (publications.length) {
    lines.push("- Publications by Google Scholar citation count:");
    publications.forEach((publication, index) => {
      const details = [
        publication.year,
        publication.venue,
        publication.citations !== undefined ? `${publication.citations} citations` : null
      ].filter(Boolean).join(", ");
      lines.push(`  ${index + 1}. ${publication.title}${details ? ` (${details})` : ""}`);
    });
  }

  return lines.join("\n");
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function getScholarContext() {
  if (cachedScholarContext && Date.now() - cachedScholarContextAt < SCHOLAR_CACHE_TTL_MS) {
    return cachedScholarContext;
  }

  for (const url of SCHOLAR_DATA_URLS) {
    try {
      const response = await fetchWithTimeout(url, 4000);
      if (!response.ok) continue;
      const data = await response.json();
      cachedScholarContext = formatScholarContext(data);
      cachedScholarContextAt = Date.now();
      return cachedScholarContext;
    } catch (error) {
      // Try the next public cache URL.
    }
  }

  cachedScholarContext = [
    "## Cached Google Scholar Data",
    "Google Scholar cached data is currently unavailable. Do not invent citation counts or Scholar-only publication details."
  ].join("\n");
  cachedScholarContextAt = Date.now();
  return cachedScholarContext;
}

module.exports = async function handler(request, response) {
  const origin = resolveOrigin(request.headers.origin);
  if (!origin) {
    sendJson(response, 403, { error: "Origin is not allowed." });
    return;
  }

  setCors(response, origin);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    sendJson(response, 500, { error: "DeepSeek API key is not configured." });
    return;
  }

  const messages = normalizeMessages(request.body && request.body.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    sendJson(response, 400, { error: "A user message is required." });
    return;
  }

  try {
    const scholarContext = await getScholarContext();
    const deepseekResponse = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL || "deepseek-chat",
        temperature: 0.2,
        max_tokens: 650,
        messages: [
          {
            role: "system",
            content: [
              "You are Ask Bo, a factual assistant for Bo Zhao's academic homepage.",
              "Use only the public profile knowledge base below.",
              "Do not invent facts, links, paper statuses, metrics, personal details, or future plans.",
              "If the answer is not supported, say that Bo's public profile does not provide enough information.",
              "Answer in Chinese when the user writes Chinese; otherwise answer in concise professional English.",
              "",
              getContext(),
              "",
              scholarContext
            ].join("\n")
          },
          ...messages
        ]
      })
    });

    const data = await deepseekResponse.json();
    if (!deepseekResponse.ok) {
      sendJson(response, deepseekResponse.status, { error: data.error?.message || "DeepSeek request failed." });
      return;
    }

    const answer = data.choices?.[0]?.message?.content?.trim();
    sendJson(response, 200, { answer: answer || "I could not generate an answer." });
  } catch (error) {
    sendJson(response, 500, { error: "Internal API error." });
  }
};
