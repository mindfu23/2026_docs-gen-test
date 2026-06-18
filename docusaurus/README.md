# Docusaurus — Layer ② Publish site (self-hosted, max control)

**Job:** build a static docs site from MDX, with API reference via the OpenAPI plugin.
Open-source, React-based, **you own the build and deploy** (no SaaS, no per-seat cost).

**Status: scaffolded ✅** (Docusaurus 3.10.1, TypeScript). The real site is in **[`site/`](site/)**;
this folder is the planning wrapper.

## What's wired
- `site/docusaurus.config.ts` — site metadata; **i18n seam** (`en` + `en-GB` for the British-voice
  LoRA); the **OpenAPI plugin** pointed at `../../shared/openapi-subset.json`; docs at site root.
- `site/docs/` — the 3 D&D guides (`overview` / `endpoints` / `concepts`), adapted to Docusaurus
  `:::` admonitions (a live demo of the cross-tool format-portability finding).
- `site/static/img/sample-d20.svg` — the authoring-ops sample image, used as the navbar logo.
- `site/netlify.toml` + `site/netlify/functions/chat.ts` + `site/.env.example` — the deploy +
  RAG-chatbot-proxy stubs (moved in so `site/` is a self-contained deploy unit).

## Run it (your steps — deps not installed yet)
```bash
cd docusaurus/site
npm install
npm run gen-api-docs      # generate docs/api/* from the spec (then uncomment apiSidebar in sidebars.ts)
npm start                 # local preview
npm run build             # → build/ ; deploy via GitHub → Netlify (base directory = docusaurus/site)
```

## Spec variants (try all & compare)
`docusaurus.config.ts` → plugin `specPath` currently uses `openapi-subset.json`. Swap to
`openapi.json` (full/noisy) or `openapi-auth.json` (auth + POST) and re-run `gen-api-docs` to
compare how the reference renders each. Keep all three — see `../PLAN.md` "preserve every option".

## RAG chatbot (the LoRA / vLLM showcase)
Docusaurus is your own React app, so it hosts a **RAG chatbot** grounded in the Open5e content,
answered by a **base LLM + your LoRA**, served via the swappable config in
[`../shared/MODEL_LAYER.md`](../shared/MODEL_LAYER.md) through `site/netlify/functions/chat.ts`.
Start base-only; attach the HF LoRA once it clears the safety screen.

## What to capture / for the write-up
The self-hosted site + the fact that **you** wired the plugin, theme, i18n, and deploy — the
"own your stack" option: max flexibility and zero recurring cost, paid for in setup effort. The
OpenAPI playground is less turnkey than Mintlify's. Best for engineering teams that want no lock-in.
