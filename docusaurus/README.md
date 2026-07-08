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

## i18n (en-GB) — confirm translation works
The locale is declared (`en` + `en-GB`) and the **British content tree is scaffolded** at
`site/i18n/en-GB/docusaurus-plugin-content-docs/current/` (the 3 guides, British-spelled + a
banner so the switch is visible). This folder is the **target for the British-voice LoRA** output.

How Docusaurus i18n works, and how to confirm it:
```bash
cd docusaurus/site
# Generate the theme/UI string files for the locale (correct keys for your version — don't hand-write these):
npm run write-translations -- --locale en-GB     # creates i18n/en-GB/code.json + theme JSON
npm start -- --locale en-GB                        # preview the British locale at /en-GB/
npm run build                                      # builds BOTH locales; the navbar locale dropdown switches them
```
Translated docs content = a **copy** of each page under `i18n/en-GB/.../current/` that you edit
(already done here). Theme/UI strings = generated JSON you then edit. Swapping the locale dropdown
in the navbar confirms the whole chain end to end.

## Spec variants (try all & compare)
`docusaurus.config.ts` → plugin `specPath` currently uses `openapi-subset.json`. Swap to
`openapi.json` (full/noisy) or `openapi-auth.json` (auth + POST) and re-run `gen-api-docs` to
compare how the reference renders each. Keep all three — see `../PLAN.md` "preserve every option".

## RAG chatbot (the LoRA / vLLM showcase) — scaffolded ✅
Docusaurus is your own React app, so it hosts a **RAG chatbot** grounded in Open5e content. Built:
- `site/netlify/functions/chat.ts` — **retrieves** from Open5e (`/v2/search/?vector=true`), builds a
  grounded system prompt, and calls the configured base LLM (swappable per
  [`../shared/MODEL_LAYER.md`](../shared/MODEL_LAYER.md)). Works retrieval-only before a model is wired.
- `site/src/components/RagChat/` + `site/src/pages/chat.tsx` — the **"Ask the Docs"** page at `/chat`
  (navbar link added).

**Run it:** `netlify dev` from `site/` (plain `docusaurus start` won't run the function). Set
`LLM_BASE_URL` / `LLM_MODEL` in the env for grounded answers; leave `LLM_LORA` empty for **base-only**
(the default until the British-voice LoRA clears the safety screen).

## What to capture / for the write-up
The self-hosted site + the fact that **you** wired the plugin, theme, i18n, and deploy — the
"own your stack" option: max flexibility and zero recurring cost, paid for in setup effort. The
OpenAPI playground is less turnkey than Mintlify's. Best for engineering teams that want no lock-in.
