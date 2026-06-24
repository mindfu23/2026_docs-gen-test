# GitBook — Layer ② Publish site (SaaS, WYSIWYG + git-sync)

**Job:** publish a hosted docs/KB site with an API reference. Distinctive trait: a **WYSIWYG
editor with bidirectional Git Sync** — non-engineers edit in the UI while changes round-trip to
Markdown in the repo.

**Status: prepped ✅.** A self-contained Git-Sync content root lives in **[`content/`](content/)**;
this folder is the planning wrapper.

## What's prepped
- [`.gitbook.yaml`](.gitbook.yaml) — Git Sync config (`root: ./content/`, README + SUMMARY).
- [`content/SUMMARY.md`](content/SUMMARY.md) — the table of contents (GitBook's nav model).
- [`content/README.md`](content/README.md) · `endpoints.md` · `concepts.md` — the 3 guides using
  GitBook **`{% hint %}`** callouts (vs Mintlify `<Info>` vs Docusaurus `:::` — the format-
  portability finding, in three dialects).
- [`content/api-reference/`](content/api-reference/) — the spec (`openapi.json`) + import notes.
- `content/.gitbook/assets/sample-d20.svg` — the sample image.

## Fast path (once logged in)
1. Create a GitBook account → new **space** (free for personal/OSS — *verify terms*).
2. **Git Sync** → connect this repo, point it at the **`gitbook/`** subdirectory (or move
   `.gitbook.yaml` to the repo root per its comment). The Markdown + SUMMARY import as a space.
3. Add the **OpenAPI** reference (UI import of `content/api-reference/openapi.json`, or the live
   URL) — see `content/api-reference/README.md`.
4. **Exercise the authoring battery** (`shared/AUTHORING_OPS.md`) here — this is the tool where
   create/drag-reorder/nest/inline-image-upload is the headline. Watch edits round-trip to the repo.
5. **Docs Hub back-link:** a hub link sits at the top of `content/README.md`. For a proper
   header/navbar link back to the hub, set it in GitBook's **site customization (UI)** — GitBook's
   header links aren't driven by Git Sync. (This per-tool difference in where the back-link lives
   is itself a small finding.)

## What to capture
The hosted site **and** a screenshot of the WYSIWYG editor + Git Sync settings — that combo is
GitBook's differentiator. Note how its block model handles the same Markdown the other tools rendered.

## For the write-up
The mixed-audience option: best when non-technical contributors co-author alongside engineers.
More content-platform than dev-docs-framework. Compare its git model (bidirectional sync) against
Mintlify (git-as-source) and Docusaurus (git-is-the-repo). **Watch the sync direction** — editing
in the GUI can overwrite repo files if mis-set (see `FURTHER_TESTING.md` §4).
