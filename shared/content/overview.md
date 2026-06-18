# Overview / Getting Started

> Authored from the live **Open5e** OpenAPI spec (`shared/openapi.json`, OpenAPI 3.0.3,
> 69 paths). Open5e serves Dungeons & Dragons 5e SRD content (spells, monsters, classes,
> items, rules) over a clean REST API. This is the shared subject documented by all five tools.

![A twenty-sided die](../assets/sample-d20.svg)

> The image above is the **sample asset** for the authoring-operations test — each publishing
> tool should be exercised by adding it to a page (see `shared/AUTHORING_OPS.md`).

## What this is

**Open5e** is an open REST API for 5th-edition d20 game content — the SRD plus other
OGL/CC-licensed material. You query it for spells, creatures, classes, magic items, weapons,
conditions, and more. It is **completely open: no API key, no auth, no rate-limit signup.**

The current surface is the **v2** API. Responses are JSON, paginated, and richly filterable.

## Base URL

```
https://api.open5e.com
```

| Server | URL | Use |
|---|---|---|
| Production | `https://api.open5e.com` | default |
| Beta | `https://api-beta.open5e.com` | preview of upcoming changes |
| Localhost | `http://localhost:8000` | a self-hosted Open5e instance |

## Authentication

**None.** Every endpoint is public and read-only — just issue GET requests.

## Your first request

cURL — fetch the spell *Fireball*:

```bash
curl "https://api.open5e.com/v2/spells/?name=Fireball"
```

Python (the standard `requests` library):

```python
import requests

r = requests.get("https://api.open5e.com/v2/spells/", params={"name": "Fireball"})
spell = r.json()["results"][0]
print(spell["name"], "— level", spell["level"], "—", spell["desc"][:80])
```

Every list response is a paginated envelope:

```json
{ "count": 1, "next": null, "previous": null, "results": [ { "key": "srd_fireball", "name": "Fireball", "level": 3, "...": "..." } ] }
```

## Where to go next

- **[Endpoints](./endpoints.md)** — the resource surface (spells, creatures, classes, …),
  generated from the spec.
- **[Concepts](./concepts.md)** — the data model: keys/slugs, pagination, filtering, ordering,
  search (including semantic vector search), and how `documents` carry licensing.

## Attribution

Content derives from the D&D 5e SRD under **CC-BY-4.0** — see [`../../NOTICE.md`](../../NOTICE.md).
The required attribution must appear in anything you publish from this data.
