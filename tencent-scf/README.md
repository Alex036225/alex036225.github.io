# Tencent Cloud SCF Backend

This directory deploys the mainland China backend for Ask Bo.

## Deploy

Run from this directory:

```bash
npm install
DEEPSEEK_API_KEY=your_key_here npx scf deploy --force
```

The deployed function is a Tencent Cloud Web Function in `ap-guangzhou`.

## Public URL

The current function URL is:

```text
https://1404299806-ervarhynrt.ap-guangzhou.tencentscf.com
```

The homepage reads this URL from `_config.yml` under `ai_chat_endpoints`.

## Notes

- Do not commit `.env` or Tencent Cloud credentials.
- If `ai/profile-context.md` changes, regenerate `src/profile-context.js` before redeploying.
