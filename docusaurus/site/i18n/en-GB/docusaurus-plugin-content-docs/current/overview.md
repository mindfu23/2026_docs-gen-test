---
slug: /
sidebar_position: 1
title: Overview
---

# Overview / Getting Started

![A twenty-sided die](/img/sample-d20.svg)

:::note[🇬🇧 British-voice edition (en-GB)]
This is the **English (British)** locale, served only at `/en-GB/`. It is a hand-seeded British
copy for now — a placeholder for the **British-voice LoRA** output, which will replace this prose
once the adapter clears the safety screen (see `shared/MODEL_LAYER.md`). If you can read this
banner, the i18n mechanism is working: Docusaurus is serving the `i18n/en-GB/` tree for this locale.
:::

## What this is

**Open5e** is an open REST API for fifth-edition d20 game content — the SRD plus other OGL/CC
material: spells, creatures, classes, magic items, and so on. It is **completely open: no API key,
no authorisation.** The current surface is **v2**; responses are JSON, paginated, and richly
filterable.

## Base URL

```
https://api.open5e.com
```

## Your first request

```bash
curl "https://api.open5e.com/v2/spells/?name=Fireball"
```

```python
import requests
r = requests.get("https://api.open5e.com/v2/spells/", params={"name": "Fireball"})
spell = r.json()["results"][0]
print(spell["name"], "— level", spell["level"])
```

## Where to go next

- **[Endpoints](./endpoints.md)** — the resource surface.
- **[Concepts](./concepts.md)** — the data model: keys, pagination, filtering, search.
- **[API Reference](/api)** — generated from the spec (run `npm run gen-api-docs` first).

:::note[Attribution]
Content derives from the D&D 5e SRD under **CC-BY-4.0** — see `NOTICE.md`. (British spelling:
"licence" as the noun; the API field is still spelled `license`.)
:::
