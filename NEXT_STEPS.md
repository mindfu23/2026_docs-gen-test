# Next steps — per doc-gen system

Where each tool stands, and what to do next. Two buckets per tool: **(A) finish the comparison
capture** (to mark its showcase tab done), and **(B) next-phase usage** (how you'd actually use/
extend it beyond the demo). See `PLAN.md` for the overall plan, `COMPARISON.md` for findings.

## Status at a glance
| Tool | Layer | Comparison status | Hosted/live? |
|---|---|---|---|
| OpenAPI Generator | ① generate | ✅ done (Python SDK generated) | n/a (local) |
| Speakeasy | ① generate | ✅ done (SDK + overlay findings) | local; hosted optional |
| Stainless | ① generate | ✅ documented (service shut down) | n/a |
| Docusaurus | ② publish | ✅ done (build + i18n + API ref) | ⬜ deploy pending |
| Mintlify | ② publish | ✅ done (previewed, live Try-It) | ⬜ deploy pending |
| GitBook | ② publish | ⬜ capture remaining | ⬜ publish pending |
| Promptless | ③ maintain | ⬜ trigger remaining | n/a (PR bot) |

---

## Layer ① — SDK generation

### OpenAPI Generator (free/OSS)
- **A. Capture:** done — `openapi-generator/python` committed.
- **B. Next phase:** generate the **TypeScript** client too (one-liner in its README); add a
  `make regen` / npm script to regenerate on spec change; optionally compare `typescript-fetch`
  vs `typescript-axios`. It's your $0 baseline — keep it as the "uncurated" reference.

### Speakeasy (commercial)
- **A. Capture:** done. Optional polish: **approve the method-name overlay** in Studio to
  materialize `sdk.spells.list()` as a committable artifact; screenshot the before/after.
- **B. Next phase:** add the **MCP-server target** (the on-theme bonus — `generate-mcp-server`
  skill is installed); wire `speakeasy run` into CI; apply the pagination/retries overlays
  (`x-speakeasy-*`); publish the SDK to PyPI/npm; diff Speakeasy's auto-drafted config vs the
  hand-tuned `stainless.yml`-style intent.

### Stainless (defunct as a service)
- **A. Capture:** done — documented from public output (`stainless/README.md`).
- **B. Next phase:** nothing to run (Anthropic shut the generator down). Keep as the quality
  benchmark; if you ever need that polish, **Speakeasy is the successor**.

---

## Layer ② — publishing

### Docusaurus (self-host, max control)
- **A. Capture:** done (build verified, API ref, en/en-GB i18n).
- **B. Next phase:**
  - **Deploy:** GitHub → Netlify, **base dir `docusaurus/site`** (`npm run build` runs
    `gen-api-docs` automatically). Set the live URL in `showcase/src/tools.ts`.
  - **RAG chatbot** (the LoRA/vLLM showcase): wire `netlify/functions/chat.ts` to a base model
    + retrieval over Open5e (`shared/MODEL_LAYER.md`). **Gated on the LoRA safety screen** for the
    voiced layer; runs base-only until then.
  - **Voiced en-GB:** replace the British placeholder pages with the **British-voice LoRA** output
    once it clears safety.
  - Wire `apiSidebar` (uncomment in `sidebars.ts`); consider docs versioning.

### Mintlify (SaaS, dev-docs-native)
- **A. Capture:** done (previewed via `mint dev`; live "Try It" confirmed).
- **B. Next phase:**
  - **Host from the monorepo:** install the GitHub App on `2026_docs-gen-test`, set content dir
    **`mintlify/`** (avoid a separate Mintlify repo). Set the live URL + the hub back-link.
  - Explore **AI search / assistant**; evaluate Mintlify's **own SDK generation** (overlaps
    Speakeasy — a layer-① vs ② boundary finding).

### GitBook (SaaS, WYSIWYG + git-sync)
- **A. Capture (remaining):**
  1. Confirm the Git-Sync pulled Overview/Endpoints/Concepts.
  2. **Run the authoring battery** (`shared/AUTHORING_OPS.md`): create page, drag-reorder, nest,
     **inline-upload `sample-d20.svg`**, edit.
  3. **Round-trip:** edit in GitBook → merge the change request → confirm a commit lands in
     `gitbook/content/` (the bidirectional differentiator).
  4. Screenshot the editor + the round-trip commit → fill the GitBook tab + COMPARISON.
- **B. Next phase:** publish the site (public URL); set the header **Docs-Hub back-link** (UI);
  add the **OpenAPI reference** via GitBook's OpenAPI feature; explore GitBook AI.

---

## Layer ③ — maintenance

### Promptless (AI doc-update PRs)
- **A. Capture (remaining):** fire one trigger and capture the drafted doc-update PR:
  - **Code path:** open a small doc-relevant PR on the **vLLM fork** → it drafts a doc-update PR.
  - **Slack path:** `@Promptless` (or "Update Docs") on a thread in the Amber Xanadu workspace.
  - Screenshot the PR/diff + citations → fill the Promptless tab.
- **B. Next phase:** point its **publish target at a live docs site** (your Mintlify/GitBook) so it
  maintains a real site; enable **passive Slack listening** on a channel; let it react to ongoing
  fork churn; compare its drafts vs Mintlify's "outdated docs" PR check + GitBook AI.

---

## Project finalization (cross-cutting)
1. **Fill remaining showcase tabs** (GitBook, Promptless) → flip `status` to `done` (then 7/7).
2. **Deploy** the `showcase/` hub + Docusaurus; set each `liveUrl`; one find/replace of
   **`REPLACE-WITH-HUB-URL`** (3 config files) → the doc-portal cross-links go live.
3. **Write up `COMPARISON.md`** — the deliverable. Lead findings: layer-① curated-vs-verbose
   (Speakeasy overlay vs OSS ~30-arg signatures), the **Open5e spec bug Docusaurus surfaced**,
   callout-format portability in 3 dialects, who-owns-hosting, Mintlify's duplicate-label naming
   quirk, GitBook's round-trip authoring.
4. **Optional:** file the **Open5e upstream PR** (drafted in `open5e-contribution/`).
5. **Optional:** work the **`FURTHER_TESTING.md`** backlog (search, versioning, RAG eval, lock-in).
6. **Separate project:** the **LoRA content-safety screen** — gates the voiced i18n + RAG-with-LoRA.
