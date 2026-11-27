# Claude Code setup

Project guidance lives in `/CLAUDE.md` (which imports `/AGENTS.md`). Claude Code loads both automatically.

## Skills (`.claude/skills/`)

Invoke with `/<name>` or let Claude pick them up from the description.

| Skill | Use for |
| --- | --- |
| `astro-page-component` | Adding or editing pages, layouts, and components |
| `content-collections` | Adding or editing companies, books, and work entries |
| `quality-check` | Accessibility, SEO/metadata, and image review of changes |
| `verify-build` | Build and preview workflow before committing |

## Agents (`.claude/agents/`)

| Agent | Responsibility |
| --- | --- |
| `issue-implementer` | Implements open GitHub issues, one branch and PR each |
| `astro-reviewer` | Read-only review of a diff against project conventions |
| `change-planner` | Read-only implementation plan for a task, no edits |

Invoke by asking, e.g. "use the astro-reviewer agent on my current branch", or via `/agents`.

## Notes

- `settings.local.json` is personal and git-ignored; shared settings would go in `settings.json`.
- There is no lint or format script; do not assume one exists.
