import http from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

async function loadEnv() {
  const envPath = resolve(rootDir, ".env");
  if (!existsSync(envPath)) return;
  const text = await readFile(envPath, "utf8");
  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const equalIndex = trimmed.indexOf("=");
    if (equalIndex === -1) return;
    const key = trimmed.slice(0, equalIndex).trim();
    const value = trimmed.slice(equalIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  });
}

function readJsonBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 24_000) {
        request.destroy();
        rejectBody(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      try {
        resolveBody(body ? JSON.parse(body) : {});
      } catch (error) {
        rejectBody(error);
      }
    });
    request.on("error", rejectBody);
  });
}

function sendJson(response, statusCode, payload, origin = "*") {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(JSON.stringify(payload));
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

await loadEnv();

const apiKey = process.env.DEEPSEEK_API_KEY;
const port = Number(process.env.DEEPSEEK_PROXY_PORT || 8790);
const host = process.env.DEEPSEEK_PROXY_HOST || "127.0.0.1";
const allowedOrigin = process.env.DEEPSEEK_ALLOWED_ORIGIN || "*";
const model = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const context = await readFile(resolve(rootDir, "ai/profile-context.md"), "utf8");

if (!apiKey) {
  console.error("Missing DEEPSEEK_API_KEY. Create .env from .env.example first.");
  process.exit(1);
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {}, allowedOrigin);
    return;
  }

  if (request.method !== "POST" || request.url !== "/api/chat") {
    sendJson(response, 404, { error: "Not found" }, allowedOrigin);
    return;
  }

  try {
    const body = await readJsonBody(request);
    const messages = normalizeMessages(body.messages);
    if (!messages.length || messages[messages.length - 1].role !== "user") {
      sendJson(response, 400, { error: "A user message is required." }, allowedOrigin);
      return;
    }

    const deepseekResponse = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 650,
        messages: [
          {
            role: "system",
            content: [
              "You are calienn, Bo Zhao's digital avatar for his academic homepage.",
              "Use only the public profile knowledge base below.",
              "Do not invent facts, links, paper statuses, metrics, personal details, or future plans.",
              "If the answer is not supported, say that Bo's public profile does not provide enough information.",
              "Answer in Chinese when the user writes Chinese; otherwise answer in concise professional English.",
              "",
              context
            ].join("\n")
          },
          ...messages
        ]
      })
    });

    const data = await deepseekResponse.json();
    if (!deepseekResponse.ok) {
      sendJson(response, deepseekResponse.status, { error: data.error?.message || "DeepSeek request failed." }, allowedOrigin);
      return;
    }

    const answer = data.choices?.[0]?.message?.content?.trim();
    sendJson(response, 200, { answer: answer || "I could not generate an answer." }, allowedOrigin);
  } catch (error) {
    sendJson(response, 500, { error: "Internal proxy error." }, allowedOrigin);
  }
});

server.listen(port, host, () => {
  console.log(`DeepSeek proxy running at http://${host}:${port}/api/chat`);
});
