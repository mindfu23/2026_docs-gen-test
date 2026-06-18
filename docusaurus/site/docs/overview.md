---
slug: /
sidebar_position: 1
title: Overview
---

# Overview / Getting Started

![A twenty-sided die](/img/sample-d20.svg)

:::info Authoring-test asset
The image above is the sample asset for the authoring-operations battery — each publishing tool
is exercised by adding it to a page (see `shared/AUTHORING_OPS.md`). This page is also the
Docusaurus adaptation of the canonical `shared/content/overview.md`: blockquote callouts become
Docusaurus `:::` admonitions — a small demonstration of the cross-tool format-portability finding.
:::

## What this is

**Open5e** is an open REST API for 5th-edition d20 game content — the SRD plus other OGL/CC
material. You query it for spells, creatures, classes, magic items, and more. It is
**completely open: no API key, no auth.** The current surface is **v2**; responses are JSON,
paginated, and richly filterable.

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

:::note Attribution
Content derives from the D&D 5e SRD under **CC-BY-4.0** — see `NOTICE.md`.
:::
