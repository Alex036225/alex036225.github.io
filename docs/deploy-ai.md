# Deploy Ask Bo DeepSeek API

The homepage is hosted by GitHub Pages, so the DeepSeek API key must not be used in browser JavaScript. Deploy `api/chat.js` as a Vercel Serverless Function and store the key as a Vercel environment variable.

## One-time Vercel Setup

1. Install and log in to Vercel:

```bash
npm install -g vercel
vercel login
```

2. Link this repository to a Vercel project:

```bash
vercel link
```

3. Add environment variables in Vercel:

```bash
vercel env add DEEPSEEK_API_KEY production
vercel env add DEEPSEEK_MODEL production
vercel env add ALLOWED_ORIGINS production
```

Recommended values:

```text
DEEPSEEK_MODEL=deepseek-chat
ALLOWED_ORIGINS=https://alex036225.github.io,http://127.0.0.1:4000,http://localhost:4000
```

Paste the real DeepSeek key only into the Vercel prompt. Do not write it into Git-tracked files.

4. Deploy the API:

```bash
vercel --prod
```

5. Copy the production API URL, for example:

```text
https://your-vercel-project.vercel.app/api/chat
```

6. Set the endpoint in `_config.yml`:

```yaml
ai_chat_endpoint: "https://your-vercel-project.vercel.app/api/chat"
```

Then rebuild and push the homepage.

## Mainland and Overseas Access

`vercel.app` can be unreachable from some mainland China networks. For visitors in both mainland China and overseas regions, configure multiple backends:

```yaml
ai_chat_endpoints:
  - "https://your-overseas-vercel-project.vercel.app/api/chat"
  - "https://your-mainland-cloud-function.example.com/api/chat"
```

The frontend tries these endpoints in order. Keep the Vercel endpoint for overseas visitors, and add a mainland-accessible API endpoint, such as a Tencent Cloud SCF/API Gateway or Alibaba Cloud Function Compute HTTP trigger, for visitors whose network cannot reach `vercel.app`.

## Local Testing

For local-only testing, create `.env` from `.env.example` and run:

```bash
node scripts/deepseek-proxy.mjs
```

The frontend falls back to `http://127.0.0.1:8790/api/chat` on localhost when `ai_chat_endpoint` is empty.
