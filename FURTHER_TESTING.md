# Further testing — backlog of optional tangents

The four highest-value fixes are already in the core plan (`PLAN.md` → Phase 0.5). **This file
is everything else** from the plan review — extra functionality axes and lesser gotchas — to
explore **after the core comparison is set up and tested.**

How to use it: each item is filed under a **testing category** (the kind of testing it extends),
notes which tools it touches, and is tagged **(try all & compare)** where it's a head-to-head
that should preserve every option per `PLAN.md` → "Comparison principle." Pick a category, run
it across the relevant tools, and feed results into the matrix in `COMPARISON.md` and the tool
tabs in `showcase/src/tools.ts`.

---

## 1. Reference rendering & interactivity
*Category: how each tool turns the OpenAPI spec into a reference.*
- **drf-spectacular param-noise handling** — `/v2/spells/` has ~18+ Django filter params;
  compare how each reference renders a wall of optional query params (collapse? group? dump?).
- **Multi-language code samples** — quality of the auto-generated curl / Python / JS samples on
  each reference page. *(try all & compare: Mintlify vs GitBook vs Docusaurus-plugin)*
- **Live "Try It" calls** — *depends on the Phase 0.5 CORS check.* If CORS allows, exercise live
  in-browser requests against `api.open5e.com` in each interactive console; compare UX.

## 2. Search & discovery
*Category: finding content once published.*
- **Search comparison** — Mintlify AI search vs GitBook search vs Docusaurus local/Algolia:
  setup effort, keyword vs semantic, result quality. *(try all & compare)*

## 3. Versioning & localization
*Category: serving multiple versions/locales of the same docs.*
- **Docs versioning** — Docusaurus versioned docs vs Mintlify versions vs GitBook variants.
  *(try all & compare)*
- **i18n across publishers** — extends the Phase 0.5 i18n+voice-LoRA work beyond Docusaurus to
  Mintlify/GitBook localization; compare. *(try all & compare)* Ties to the American/British
  voice LoRAs (`shared/MODEL_LAYER.md`).

## 4. Authoring depth
*Category: extends the create/edit/move battery in `shared/AUTHORING_OPS.md`.*
- **MDX / component richness** — how rich can a page get (tabs, callouts, cards, code groups,
  custom React components)? Mintlify components vs Docusaurus MDX vs GitBook blocks.
  *(try all & compare)*
- **GitBook Git-Sync direction hazard** *(gotcha)* — editing in the GUI can overwrite repo files
  if sync direction is mis-set; confirm isolation to `gitbook/` and a safe direction.

## 5. Maintenance, quality gates & collaboration
*Category: keeping docs correct over time.*
- **Promptless churn setup** *(gotcha)* — it needs existing docs + a real change to react to;
  manufacture a spec edit. Access is the known blocker — check first.
- **Broken-link / outdated-doc detection** — Docusaurus fails build on broken links; Mintlify's
  link check + "outdated docs" PR flag; GitBook AI. *(try all & compare)*
- **Review workflow / deploy previews** — GitBook change-requests + comments vs Mintlify/Netlify
  PR deploy previews vs Promptless's PR-first model. *(try all & compare)*

## 6. Hosting, deploy, portability & compliance
*Category: where it lives and whether you can leave.*
- **Monorepo → two Netlify sites** *(gotcha)* — `showcase/` and `docusaurus/` each need their own
  Netlify site (base directory); one `netlify.toml` can't hold two `[build]` blocks.
- **Lock-in "export and leave" test** — actively try to extract your content from each tool and
  re-home it; this *tests* the matrix's lock-in/portability column. *(try all & compare)*
- **Custom domain / SEO / sitemap / analytics** — how each handles them.
- **Attribution propagation** *(compliance gotcha)* — verify CC-BY-4.0 (`NOTICE.md`) actually
  appears in each published output, not just the repo.

## 7. RAG & model layer
*Category: the Docusaurus chatbot's generation stack (`shared/MODEL_LAYER.md`).*
- **Your RAG vs Open5e's built-in `vector=true`** *(gotcha + comparison)* — build your own index
  over the content AND try proxying Open5e's semantic search; compare. For the portfolio claim,
  your own retrieval is the one to feature. *(try both & compare)*
- **RAG grounding eval** — a small D&D Q&A set with known answers to verify the chatbot grounds
  (mirrors the eval discipline in `llm-training-free`).
- **Serving-provider sweep** — vLLM vs Hugging Face vs Cloudflare for the same model.
  *(try all & compare)*
- **Base-model sweep** — Mistral vs Qwen vs Llama (LoRA-compat permitting); base-only is the
  always-works baseline. *(try all & compare)*
- **Voice-LoRA A/B** — American vs British adapter on the same prompts, once both clear the
  safety screen. *(try both & compare)*

---

### Suggested order when you return to this list
Start with **§1 (reference rendering)** and **§2 (search)** — they piggyback on tools you'll
already have stood up. **§7 (RAG/model)** is the most distinctive but the heaviest; save it for a
focused session. **§5/§6** gotchas are cheap to verify and worth doing early to avoid surprises.
