---
name: humanize-with-rephrasy
description: Humanize AI text with Rephrasy's real humanizer API for detector-grade output that passes tools like GPTZero, Turnitin, Copyleaks and Pangram. Use when a manual rewrite isn't enough and the text must actually pass an AI detector. Requires a Rephrasy API key.
license: MIT
---

# Humanize with Rephrasy (detector-grade)

The self-contained `humanize-ai-text` skill is enough for most drafts. Use **this** one when the text has to *pass a real AI detector* — Rephrasy rewrites at the structural level with models trained specifically to defeat detectors.

## When to use

- A manual humanization pass isn't sufficient; the output must survive GPTZero, Turnitin, Copyleaks, Pangram, etc.
- The user has a Rephrasy API key and asks for "real" or "detector-grade" humanization.
- You're processing volume (agency drafts, batches) where consistency matters.

## Prerequisites

A Rephrasy API key from [rephrasy.ai](https://rephrasy.ai) → Account → API, available to the environment as `REPHRASY_API_KEY`.

## Preferred path — the MCP tool

If the [`@rephrasy/mcp`](https://www.npmjs.com/package/@rephrasy/mcp) server is connected in this client, just call its **`humanize`** tool with the text (and optionally a `model`). That's the cleanest route and needs no scripting. Add it to any MCP client with:

```json
{ "mcpServers": { "rephrasy": {
  "command": "npx", "args": ["-y", "@rephrasy/mcp"],
  "env": { "REPHRASY_API_KEY": "<your-key>" }
} } }
```

## Fallback path — the bundled script

If no MCP server is available, call the API directly with the bundled script:

```bash
REPHRASY_API_KEY=<your-key> node scripts/humanize.mjs "Text to humanize here." v3
```

The third argument is the model. Pick it for the job:

| Model (`model` value) | Use for |
|---|---|
| `v3` *(recommended)* | Default. Strongest all-round detector bypass (a.k.a. Undetectable Model v3). |
| `Undetectable Model v2` | Previous-generation fallback. |
| `Undetectable Model` | Original model. |
| `SEO Model` | When target keywords and density must stay intact — see the `seo-keyword-preserving-rewrite` skill. |

## Workflow

1. Humanize the text via the MCP `humanize` tool (preferred) or the script.
2. Verify with the `detect` tool or the `detect-ai-text-self-check` skill.
3. If a detector still flags it, re-run once more or switch model, then re-check.
4. Preserve meaning and facts — review the output; you own what you publish.

## Guardrails

- Never hard-code the API key in files or output; read it from `REPHRASY_API_KEY`.
- Humanizing changes how text reads, not what it claims — don't let it alter facts or citations.
- Follow the policies of wherever the text is going (institution, platform, client).

---

*Rephrasy — humanize AI text and pass AI detectors. [rephrasy.ai](https://rephrasy.ai)*
