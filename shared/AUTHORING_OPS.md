# Authoring operations — the "basic functionality" battery

Goal: actually *exercise* each system's authoring, not just ingest the spec — create pages and
folders, add docs and images, edit, move/reorganize, delete. This is a **publishing-layer (②)**
capability, so it's fully meaningful for Mintlify / GitBook / Docusaurus, and takes a different
form for Stainless (①) and Promptless (③). Run the same battery in each layer-② tool so the
comparison is apples-to-apples, and record *how* each one does it.

## The standard battery (run in every layer-② tool)

1. **Create a page** — add a new doc page.
2. **Create a folder / section / group** — a new nav container.
3. **Add an image** — embed `shared/assets/sample-d20.svg` in a page.
4. **Edit an existing page** — change content + see it republish.
5. **Move a page** between folders.
6. **Reorder / reorganize** the nav/sidebar.
7. **Delete a page.**
8. **Tool-specific extras** — preview, search, versioning, cross-references/links, redirects.

For each, capture: *how you did it (GUI vs. file vs. config), how fast, any friction.*

## Per-tool mechanism

| Tool | Layer | Authoring model | Create / move / image | Account |
|---|---|---|---|---|
| **Mintlify** | ② publish | docs-as-code (+ web editor) | MDX files + `docs.json` nav; images committed to repo; move = edit nav + move file | Yes (GitHub SSO) |
| **GitBook** | ② publish | **WYSIWYG + bidirectional Git Sync** | all via GUI: create, drag-reorder, nest, inline image upload, move between sections | Yes |
| **Docusaurus** | ② publish | file-based (no GUI) | `.md` in `docs/`; folders + `_category_.json`; images in `static/img/`; move = move file + `sidebars.js` | None (local / Netlify) |
| **Stainless** | ① generate | **not page authoring** | equivalent "basic ops" = configure SDK (package, languages, method/resource naming), add hand-authored guides/snippets, **regenerate** | Yes |
| **Promptless** | ③ maintain | **not manual authoring** | equivalent "basic ops" = connect repo, **trigger a change**, review/accept/edit the AI-drafted PR (it edits existing docs) | Access required |

Separate accounts per system are expected and fine — only Docusaurus needs none.

## Why this matters for the write-up
The same seven operations feel completely different across the three publishers: GitBook is
drag-and-drop GUI, Docusaurus is move-a-file-and-edit-config, Mintlify sits in between
(files, but with a web editor and live preview). Documenting that contrast — plus the fact
that Stainless and Promptless don't *have* a page-CRUD model at all — is a sharp demonstration
of platform fluency. Feed the result into each tool's `operations` list in
`showcase/src/tools.ts` and the matrix in `COMPARISON.md`.
