const http = require("http");
const profileContext = require("./profile-context");

const PORT = Number(process.env.PORT || 9000);
const HOST = "0.0.0.0";
const DEFAULT_ALLOWED_ORIGINS = [
  "https://alex036225.github.io",
  "http://127.0.0.1:4000",
  "http://localhost:4000"
];

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

function sendJson(response, statusCode, payload, origin) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": origin || DEFAULT_ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  });
  response.end(JSON.stringify(payload));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 24000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
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

async function handleChat(request, response, origin) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    sendJson(response, 500, { error: "DeepSeek API key is not configured." }, origin);
    return;
  }

  const body = await readJsonBody(request);
  const messages = normalizeMessages(body.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    sendJson(response, 400, { error: "A user message is required." }, origin);
    return;
  }

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
            profileContext
          ].join("\n")
        },
        ...messages
      ]
    })
  });

  const data = await deepseekResponse.json();
  if (!deepseekResponse.ok) {
    sendJson(response, deepseekResponse.status, { error: data.error?.message || "DeepSeek request failed." }, origin);
    return;
  }

  const answer = data.choices?.[0]?.message?.content?.trim();
  sendJson(response, 200, { answer: answer || "I could not generate an answer." }, origin);
}

const server = http.createServer(async (request, response) => {
  const origin = resolveOrigin(request.headers.origin);
  if (!origin) {
    sendJson(response, 403, { error: "Origin is not allowed." }, DEFAULT_ALLOWED_ORIGINS[0]);
    return;
  }

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {}, origin);
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." }, origin);
    return;
  }

  try {
    await handleChat(request, response, origin);
  } catch (error) {
    sendJson(response, 500, { error: "Internal API error." }, origin);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Ask Bo Tencent SCF server listening on http://${HOST}:${PORT}`);
});
