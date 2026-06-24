# PR draft — fix dangling `Race` `$ref` in the Open5e OpenAPI schema

> Ready-to-file PR against **`open5e/open5e-api`**. Nothing has been filed yet — this is a draft
> to act on after the main project is built out. Confirmed accurate against the live schema and
> source on 2026-06-24.

## Target
- **Repo:** `open5e/open5e-api`
- **Base branch:** `staging` (the repo's default — **not** `main`)
- **Suggested head branch:** `fix/searchresult-oneof-race-to-species`
- **Read first:** `.github/CONTRIBUTING.md`. The repo has **no declared code license** (`licenseInfo: null`) — sanity-check contribution terms before submitting.

## The change (one line)

File **`server/oas.py`** — a `drf-spectacular` post-processing hook that hand-builds the
`SearchResult.object` `oneOf`. It still lists `Race`, which was renamed to `Species` in v2.

```diff
--- a/server/oas.py
+++ b/server/oas.py
@@ result['components']['schemas']['SearchResult']['properties']['object'] = {
 		'oneOf': [
 			{ '$ref': '#/components/schemas/Item' },
 			{ '$ref': '#/components/schemas/Creature' },
 			{ '$ref': '#/components/schemas/Spell' },
 			{ '$ref': '#/components/schemas/CharacterClass' },
-			{ '$ref': '#/components/schemas/Race' }
+			{ '$ref': '#/components/schemas/Species' }
 		]
 	}
```

## PR title
```
fix(schema): SearchResult oneOf references removed `Race` component (rename to `Species`)
```

## PR body (paste as-is)
```markdown
### Problem
The generated OpenAPI schema (`/schema/`) contains a **dangling `$ref`**:
`SearchResult.properties.object.oneOf` lists `#/components/schemas/Race`, but no `Race`
component exists in the v2 schema. Any tool that resolves `$ref`s against the spec fails. For
example, `docusaurus-plugin-openapi-docs` aborts generation with:

> Error: [Missing $ref pointer "#/components/schemas/Race". Token "Race" does not exist.]
> footprint [components,schemas,SearchResult,properties,object,oneOf,4]

This also breaks Redocly bundling and SDK codegen (e.g. Stainless) that validate `$ref`s.

### Root cause
`Race` was renamed to `Species` in v2 (#704, migration `0033_rename_race_species`). The
`SearchResult.object` `oneOf` is **hand-built** in `server/oas.py` (drf-spectacular
post-processing hook) and wasn't updated in that rename. `Species` is a defined component;
`Race` is not — the other four entries (Item/Creature/Spell/CharacterClass) resolve fine.

### Fix
Point the stale `oneOf` entry at `Species`:

```python
{ '$ref': '#/components/schemas/Species' }   # was: Race
```

### How to verify
```bash
# Before: 1 dangling ref
curl -s "https://api.open5e.com/schema/?format=json" | python3 -c \
 "import json,sys; d=json.load(sys.stdin); s=d['components']['schemas']; \
  print('Race defined:', 'Race' in s, '| Species defined:', 'Species' in s)"
# -> Race defined: False | Species defined: True
```
After the change, regenerate the schema and confirm every `$ref` resolves (no `Race`).

### Related
- #704 — the Race → Species rename.
- #950 — *Proposal: Commit the drf-spectacular generated OpenAPI spec in git.* This bug is a
  concrete argument for it: committing + validating the spec in CI (resolve all `$ref`s, or
  bundle with Redocly) would have caught this. Happy to add such a check as a follow-up.
```

## Commands to create the fork + branch + PR
```bash
gh repo fork open5e/open5e-api --clone
cd open5e-api
git checkout staging && git pull
git checkout -b fix/searchresult-oneof-race-to-species

# edit server/oas.py: change the `Race` $ref to `Species` (the line shown in the diff above)

git commit -am "fix(schema): SearchResult oneOf references removed Race component (-> Species)"
git push -u origin fix/searchresult-oneof-race-to-species

gh pr create --repo open5e/open5e-api --base staging \
  --title "fix(schema): SearchResult oneOf references removed \`Race\` component (rename to \`Species\`)" \
  --body-file pr-body.md   # paste the PR body above into pr-body.md
```

## Optional follow-up (only if maintainers want it)
A tiny test asserting the generated schema has no dangling `$ref`s — directly supports #950 and
prevents recurrence:
```python
# walk the generated schema; assert every "#/..." $ref resolves to an existing node
```
