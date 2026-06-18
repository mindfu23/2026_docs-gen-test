# Endpoints

> The most directly spec-derived page — each section maps to a `path` in
> `shared/openapi.json`. After your Kaggle run, regenerate this from the real spec
> (e.g. `npx @mintlify/scraping openapi-file ./shared/openapi.json`) and keep only the
> endpoints your build actually exposes. The set below is vLLM's standard surface.

## POST /v1/chat/completions

Generate a chat completion from a list of messages. The primary endpoint.

**Key parameters:** `model` (string), `messages` (array of `{role, content}`),
`temperature` (number), `top_p` (number), `max_tokens` (integer), `stop` (string | array),
`stream` (boolean), `n` (integer).

```bash
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen2.5-0.5B-Instruct","messages":[{"role":"user","content":"Hi"}]}'
```

## POST /v1/completions

Legacy text completion from a raw `prompt` string (no chat roles).

**Key parameters:** `model` (string), `prompt` (string | array), `max_tokens` (integer),
`temperature` (number), `top_p` (number), `stop`, `stream` (boolean).

```bash
curl http://localhost:8000/v1/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"Qwen/Qwen2.5-0.5B-Instruct","prompt":"Once upon a time","max_tokens":32}'
```

## POST /v1/embeddings

Return embedding vectors for input text. Only available when serving an embedding model.

**Key parameters:** `model` (string), `input` (string | array), `encoding_format` (`float` | `base64`).

```bash
curl http://localhost:8000/v1/embeddings \
  -H "Content-Type: application/json" \
  -d '{"model":"<embedding-model>","input":"hello world"}'
```

## GET /v1/models

List the model(s) currently served. Useful as a liveness check.

```bash
curl http://localhost:8000/v1/models
```

## POST /tokenize

vLLM extension (not in the OpenAI API). Convert text into token IDs for the served model.

**Key parameters:** `model` (string), `prompt` (string).

## POST /detokenize

vLLM extension. Convert token IDs back into text.

**Key parameters:** `model` (string), `tokens` (array of integers).

## GET /health

Liveness probe. Returns HTTP 200 with no body when the server is ready.

```bash
curl -i http://localhost:8000/health
```

---

**Note for the demo:** `/v1/chat/completions`, `/v1/completions`, `/v1/embeddings`, and
`/v1/models` are the OpenAI-compatible core that Stainless will turn into typed SDK methods
and that Mintlify/GitBook/Docusaurus will render as interactive reference pages. `/tokenize`,
`/detokenize`, and `/health` are vLLM-specific — a good thing to point out in the write-up,
since they show how a tool handles non-standard endpoints in a spec.
