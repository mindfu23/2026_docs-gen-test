# Overview / Getting Started

> Seed page authored from vLLM's standard OpenAI-compatible API. Reconcile against
> your real `shared/openapi.json` after a Kaggle run (the `info.version`, `servers`
> URL, and served model name are the fields most likely to differ).

## What this is

vLLM exposes an **OpenAI-compatible inference server**. Once you run `vllm serve <model>`,
you get a FastAPI application that speaks the same REST dialect as the OpenAI API — so
existing OpenAI client libraries work against it by changing only the base URL. Because
it is FastAPI, it auto-publishes an OpenAPI spec at `/openapi.json` and an interactive
Swagger UI at `/docs`. That spec is the single shared input this whole demo is built on.

## Base URL

```
http://localhost:8000/v1
```

The server binds to `127.0.0.1:8000` in this demo (bind to `127.0.0.1`, not the default
`0.0.0.0`, so the API is not exposed to your local network).

## Authentication

Auth is **optional** and off by default. If you start the server with `--api-key <key>`,
clients must send `Authorization: Bearer <key>`. With no key set, requests are unauthenticated.

## Your first request

cURL:

```bash
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen/Qwen2.5-0.5B-Instruct",
    "messages": [{"role": "user", "content": "Say hi in three words."}]
  }'
```

Python (official OpenAI SDK pointed at vLLM):

```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

resp = client.chat.completions.create(
    model="Qwen/Qwen2.5-0.5B-Instruct",
    messages=[{"role": "user", "content": "Say hi in three words."}],
)
print(resp.choices[0].message.content)
```

## Where to go next

- **[Endpoints](./endpoints.md)** — the request/response surface, generated from the spec.
- **[Concepts](./concepts.md)** — sampling parameters, chat vs. completion vs. embeddings,
  streaming, and tokenization.
