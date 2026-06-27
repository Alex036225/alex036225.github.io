const fs = require("node:fs");
const path = require("node:path");

const DEFAULT_ALLOWED_ORIGINS = [
  "https://alex036225.github.io",
  "http://127.0.0.1:4000",
  "http://localhost:4000"
];

let cachedContext;

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
            content: `You are Ask Bo, a concise assistant for Bo Zhao's academic homepage.\n\n${getContext()}`
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
