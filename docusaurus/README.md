# Docusaurus — Layer ② Publish site (self-hosted, max control)

**Job:** build a static docs site from MDX, with API reference via a community OpenAPI
plugin. Open-source, React-based, **you own the build and deploy** (no SaaS, no per-seat cost).

**Input:** adapted MDX from `../shared/content/` + `../shared/openapi.json` (via plugin)
→ **Output:** static site you deploy (Netlify / GH Pages / Cloudflare).

## Steps
1. `npx create-docusaurus@latest site classic` (run inside this folder).
2. Add the OpenAPI plugin: `npm i docusaurus-plugin-openapi-docs docusaurus-theme-openapi-docs`
   (*verify current package names/versions*).
3. Configure the plugin in `docusaurus.config.js` to point at `../../shared/openapi.json`;
   generate reference MDX with the plugin's `gen-api-docs` command.
4. Drop the 3 seed pages into `docs/` (adapt to Docusaurus admonitions/format).
5. `npm run start` to preview; `npm run build` then deploy the static output.

## What to capture
The self-hosted site + the fact that **you** wired the plugin, theme, and deploy. Contrast the
heavier setup against Mintlify/GitBook's instant SaaS hosting.

## For the write-up
The "own your stack" option: maximum flexibility and zero recurring cost, paid for in setup
and maintenance effort. The OpenAPI playground is less turnkey than Mintlify's. Best fit for
engineering-heavy teams that want no lock-in.

## RAG chatbot (the LoRA / vLLM showcase)
Because Docusaurus is your own React app, it's the one tool here that can host a **RAG
chatbot** grounded in the Open5e content, answered by a **base LLM + your LoRA**. Serving is
**swappable by config** (vLLM ↔ Hugging Face ↔ Cloudflare; Llama ↔ Mistral ↔ Qwen) — see
[`../shared/MODEL_LAYER.md`](../shared/MODEL_LAYER.md). Start base-only; attach the HF LoRA
once it clears the safety screen.

## Staging / deployment (pre-staged)
This is the one tool that rides the standard **GitHub → Netlify** pipeline. Ready stubs, live
once Docusaurus is scaffolded here in Phase 1:
- [`netlify.toml`](netlify.toml) — build (`npm run build` → `build/`), Node 20, functions dir,
  `/api/chat` redirect. Set Netlify **base directory = `docusaurus/`** (or move this to repo root).
- [`netlify/functions/chat.ts`](netlify/functions/chat.ts) — the RAG-chatbot LLM proxy that
  keeps the endpoint/token server-side (no `VITE_` secrets) and makes provider swaps env-only.
- [`.env.example`](.env.example) — the `LLM_*` vars the function reads.

See `../PLAN.md` → "Staging / deployment" for the full per-tool breakdown.
