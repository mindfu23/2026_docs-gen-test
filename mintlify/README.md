# Mintlify — Layer ② Publish site (SaaS, dev-docs-native)

**Job:** render `shared/openapi.json` as an interactive API reference, plus guides authored
in MDX. Hosted SaaS with a strong "Try It" playground and AI search.

**Input:** `../shared/openapi.json` + adapted MDX from `../shared/content/`
→ **Output:** hosted, searchable reference + guides.

## Steps
1. Sign up at mintlify.com with GitHub SSO → onboarding clones a starter kit into a repo and
   deploys a docs site. Install the Mintlify GitHub App so pushes auto-deploy.
2. Add `openapi.json` to the repo (e.g. `api-reference/`), then wire it in **`docs.json`**
   (the config file — it used to be `mint.json`; ignore stale tutorials):

   ```json
   { "tab": "API Reference",
     "groups": [ { "group": "Endpoints",
       "openapi": { "source": "/api-reference/openapi.json", "directory": "api-reference" } } ] }
   ```
3. Optionally pre-generate MDX endpoint pages:
   `npx @mintlify/scraping openapi-file ./api-reference/openapi.json -o ./api-reference`
4. Add the 3 concept/guide pages (adapt `../shared/content/*` to Mintlify MDX components).
5. Preview: `npm i -g mintlify && mintlify dev` → localhost:3000. Push to deploy.

## What to capture
The published site with the interactive **"Try It"** playground and AI search. Same spec as
Stainless, completely different artifact.

## For the write-up
The polished dev-docs default. Compare against GitBook (WYSIWYG/git-sync) and Docusaurus
(self-host). Also note Mintlify's GitHub App can flag outdated docs on PRs — a lighter
built-in cousin of Promptless (Layer ③).
