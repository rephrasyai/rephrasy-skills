# rephrasy-skills

[![skills.sh](https://skills.sh/b/rephrasyai/rephrasy-skills)](https://skills.sh/rephrasyai/rephrasy-skills)

Free, MIT-licensed **[Agent Skills](https://code.claude.com/docs/en/skills)** for content work: humanize AI text, keep your keywords intact, pass AI detectors, and ship agency-quality drafts. Works across Claude Code, Codex, Cursor, ChatGPT, and any client that supports `SKILL.md` skills.

Made by [Rephrasy](https://rephrasy.ai) — the AI humanizer and detector.

## Skills

### Content & writing

| Skill | What it does |
|---|---|
| [`humanize-ai-text`](skills/humanize-ai-text) | Rewrite AI-sounding text so it reads like a person wrote it |
| [`seo-keyword-preserving-rewrite`](skills/seo-keyword-preserving-rewrite) | Humanize while keeping target keywords and density intact |
| [`agency-quality-draft`](skills/agency-quality-draft) | Turn a brief or outline into a polished, publish-ready draft |
| [`detect-ai-text-self-check`](skills/detect-ai-text-self-check) | Audit a draft for AI tells before it goes out |
| [`humanize-with-rephrasy`](skills/humanize-with-rephrasy) | Detector-grade humanization via the Rephrasy API / MCP tool *(needs an API key)* |

### Pass a specific AI detector

| Skill | Detector |
|---|---|
| [`bypass-turnitin`](skills/bypass-turnitin) | Turnitin |
| [`bypass-gptzero`](skills/bypass-gptzero) | GPTZero |
| [`bypass-zerogpt`](skills/bypass-zerogpt) | ZeroGPT |
| [`bypass-copyleaks`](skills/bypass-copyleaks) | Copyleaks |
| [`bypass-pangram`](skills/bypass-pangram) | Pangram |
| [`bypass-originality-ai`](skills/bypass-originality-ai) | Originality.ai |
| [`bypass-winston-ai`](skills/bypass-winston-ai) | Winston AI |
| [`bypass-sapling`](skills/bypass-sapling) | Sapling |
| [`bypass-crossplag`](skills/bypass-crossplag) | Crossplag |
| [`bypass-content-at-scale`](skills/bypass-content-at-scale) | Content at Scale |
| [`bypass-gptradar`](skills/bypass-gptradar) | GPT Radar |
| [`bypass-writer-ai-detector`](skills/bypass-writer-ai-detector) | Writer.com AI Detector |

## Two tiers

Every skill works **self-contained** — no account or API key needed — as prompt-level guidance any agent can follow. The detector skills and `humanize-with-rephrasy` also point to **Rephrasy's real humanizer** (via the [`@rephrasy/mcp`](https://www.npmjs.com/package/@rephrasy/mcp) server or API) for detector-grade output when a manual rewrite isn't enough.

## Install

Skills live under [`skills/`](skills), one folder each with a `SKILL.md`. Use the [`skills`](https://skills.sh) CLI — no install needed, just `npx`:

```bash
# List everything in this repo
npx skills add rephrasyai/rephrasy-skills --list

# Install one skill
npx skills add rephrasyai/rephrasy-skills --skill humanize-ai-text

# Install all of them, targeting e.g. Claude Code
npx skills add rephrasyai/rephrasy-skills --skill '*' -a claude-code
```

`skills add` works with Claude Code, Codex, Cursor, and the other supported agents. The agent loads a skill automatically when a task matches its `description`. Browse the collection at **[skills.sh/rephrasyai/rephrasy-skills](https://skills.sh/rephrasyai/rephrasy-skills)**.

## Using the Rephrasy tier

For detector-grade humanization, connect the Rephrasy MCP server (one API key from [rephrasy.ai](https://rephrasy.ai) → Account → API):

```json
{ "mcpServers": { "rephrasy": {
  "command": "npx", "args": ["-y", "@rephrasy/mcp"],
  "env": { "REPHRASY_API_KEY": "<your-key>" }
} } }
```

Then skills can call the `humanize` and `detect` tools directly.

## Responsible use

These skills improve the quality and readability of writing. How you use the output is your responsibility — be honest with your readers, and follow the policies of wherever your text is published or submitted (including your institution's academic-integrity policy).

## License

MIT © Rephrasy
