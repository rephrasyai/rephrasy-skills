# rephrasy-skills

Free, MIT-licensed **[Agent Skills](https://code.claude.com/docs/en/skills)** for content work: humanize AI text, keep your keywords intact, pass AI detectors, and ship agency-quality drafts. Works across Claude Code, Codex, Cursor, ChatGPT, and any client that supports `SKILL.md` skills.

Made by [Rephrasy](https://rephrasy.ai) — the AI humanizer and detector.

## Skills

### Content & writing

| Skill | What it does |
|---|---|
| [`humanize-ai-text`](humanize-ai-text) | Rewrite AI-sounding text so it reads like a person wrote it |
| [`seo-keyword-preserving-rewrite`](seo-keyword-preserving-rewrite) | Humanize while keeping target keywords and density intact |
| [`agency-quality-draft`](agency-quality-draft) | Turn a brief or outline into a polished, publish-ready draft |
| [`detect-ai-text-self-check`](detect-ai-text-self-check) | Audit a draft for AI tells before it goes out |
| [`humanize-with-rephrasy`](humanize-with-rephrasy) | Detector-grade humanization via the Rephrasy API / MCP tool *(needs an API key)* |

### Pass a specific AI detector

| Skill | Detector |
|---|---|
| [`bypass-turnitin`](bypass-turnitin) | Turnitin |
| [`bypass-gptzero`](bypass-gptzero) | GPTZero |
| [`bypass-zerogpt`](bypass-zerogpt) | ZeroGPT |
| [`bypass-copyleaks`](bypass-copyleaks) | Copyleaks |
| [`bypass-pangram`](bypass-pangram) | Pangram |
| [`bypass-originality-ai`](bypass-originality-ai) | Originality.ai |
| [`bypass-winston-ai`](bypass-winston-ai) | Winston AI |
| [`bypass-sapling`](bypass-sapling) | Sapling |
| [`bypass-crossplag`](bypass-crossplag) | Crossplag |
| [`bypass-content-at-scale`](bypass-content-at-scale) | Content at Scale |
| [`bypass-gptradar`](bypass-gptradar) | GPT Radar |
| [`bypass-writer-ai-detector`](bypass-writer-ai-detector) | Writer.com AI Detector |

## Two tiers

Every skill works **self-contained** — no account or API key needed — as prompt-level guidance any agent can follow. The detector skills and `humanize-with-rephrasy` also point to **Rephrasy's real humanizer** (via the [`@rephrasy/mcp`](https://www.npmjs.com/package/@rephrasy/mcp) server or API) for detector-grade output when a manual rewrite isn't enough.

## Install

Each skill is a folder with a `SKILL.md`. Install one straight from GitHub:

```bash
# Claude Code
claude skill install github.com/rephrasyai/rephrasy-skills/humanize-ai-text
```

Or copy any skill folder into your client's skills directory (e.g. `~/.claude/skills/` for Claude Code, `.cursor/skills/` for Cursor). The agent loads a skill automatically when a task matches its `description`.

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
