# Next steps — per doc-gen system

Where each tool stands, and what to do next. Two buckets per tool: **(A) finish the comparison
capture** (to mark its showcase tab done), and **(B) next-phase usage** (how you'd actually use/
extend it beyond the demo). See `PLAN.md` for the overall plan, `COMPARISON.md` for findings.

## Status at a glance
| Tool | Layer | Comparison status | Hosted/live? |
|---|---|---|---|
| OpenAPI Generator | ① generate | ✅ done (Python **+ TS** SDKs) | n/a (local) |
| Speakeasy | ① generate | ✅ done (SDK + overlay findings) | local; hosted optional |
| Stainless | ① generate | ✅ documented (service shut down) | n/a |
| Docusaurus | ② publish | ✅ done (build + i18n + API ref + RAG scaffold) | ✅ deployed (Netlify) |
| Mintlify | ② publish | ✅ done (previewed, live Try-It) | ⬜ host optional (subdir) |
| GitBook | ② publish | ✅ done (round-trip confirmed) | ⬜ publish optional |
| Promptless | ③ maintain | ⬜ **trigger remaining** (onboarding done) | n/a (PR bot) |
| **Showcase hub** | index | ✅ deployed | `showcase-docs-gen.netlify.app` |

**Progress: 6 of 7 tool tabs captured.** Only Promptless's trigger + capture remains.

---

## Layer ① — SDK generation

### OpenAPI Generator (free/OSS)
- **A. Capture:** done — `openapi-generator/python` **and `openapi-generator/typescript`** committed.
- **B. Next phase:** add a `make regen` / npm script to regenerate on spec change; optionally compare
  `typescript-fetch` vs `typescript-axios`. It's your $0 baseline — the "uncurated" reference.

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
  - **Deploy:** ✅ done — live at `docusaurus-test-docs.netlify.app`; `liveUrl` set in `tools.ts`.
    *Verify the Netlify build succeeded incl. `gen-api-docs` + the `/chat` page (send me the log if not).*
  - **RAG chatbot** (the LoRA/vLLM showcase): ✅ **scaffolded** — `netlify/functions/chat.ts` retrieves
    from Open5e + calls the base model; `/chat` page + navbar link added. *Next:* set `LLM_*` env vars
    on the Netlify site + run `netlify dev` (or deploy) so the function serves. **Voiced/LoRA layer
    gated** on the safety screen; base-only until then.
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
- **A. Capture:** ✅ **done.** Git-Sync pulled the guides; authoring battery ran in the WYSIWYG
  (created a page + inline image); the **round-trip confirmed** — a merged change request pushed a
  Verified `gitbook-bot` commit (`GITBOOK-3`) back to `gitbook/content/` on `main`. Tab + COMPARISON filled.
- **B. Next phase:** **publish the site** (public URL → add as GitBook's `liveUrl`); the header
  Docs-Hub back-link is in `content/README.md` (syncs on push) + a UI header-link option; add the
  **OpenAPI reference** via GitBook's OpenAPI feature; explore GitBook AI.
  - *Housekeeping:* gitbook-bot commits to `main` — `git pull` before local commits to avoid divergence.

---

## Layer ③ — maintenance

### Promptless (AI doc-update PRs)
- **A. Capture (the last remaining tab):** onboarding is **done** (Chat=Slack, Docs repo=`_v2` fork,
  Triggers=GitHub; Context skipped). Fire **one trigger** and capture the drafted doc-update PR:
  - **Slack path:** invite/DM `@Promptless` in Amber Xanadu with a vLLM-relevant request, e.g.
    *"@Promptless document the `--dtype` server flag (accepts auto/float16/bfloat16/float32, default auto)."*
  - **Code path:** open a small doc-relevant PR on the `_v2` fork → it drafts a doc-update PR.
  - Screenshot the PR/draft + citations → send to me → I fill the tab + swap the _pending_ COMPARISON block.
- **B. Next phase:** point its **publish target at a live docs site**; enable **passive Slack listening**;
  compare its drafts vs the **Mintlify Slack agent** (now in the same workspace — the "layers blurring"
  finding) + GitBook AI.

---

## Project finalization (cross-cutting)
1. **Showcase tabs:** 6/7 filled — **only Promptless remains** (needs your trigger screenshot).
2. **Deploy:** ✅ `showcase/` hub (`showcase-docs-gen.netlify.app`) **and** Docusaurus
   (`docusaurus-test-docs.netlify.app`) are live; the **`REPLACE-WITH-HUB-URL`** token is replaced
   in all 3 config files (redeploy/push each doc set to activate the back-links). Mintlify/GitBook
   publishing is optional (set their `liveUrl` if you host them).
3. **`COMPARISON.md`:** ✅ **drafted** — full write-up incl. the "layers are blurring" finding; the
   Promptless section is the only _pending_ block. Lead findings: layer-① curated-vs-verbose
   (Speakeasy overlay vs OSS ~30-arg signatures), the **Open5e spec bug Docusaurus surfaced**,
   callout portability in 3 dialects, who-owns-hosting, Mintlify's duplicate-label naming quirk,
   GitBook's round-trip authoring, publishers growing into the maintenance layer.
4. **Optional:** file the **Open5e upstream PR** (drafted in `open5e-contribution/`).
5. **Optional:** work the **`FURTHER_TESTING.md`** backlog (search, versioning, RAG eval, lock-in).
6. **Separate project:** the **LoRA content-safety screen** — gates the voiced i18n + RAG-with-LoRA.
