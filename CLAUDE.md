@AGENTS.md

# Claude Code project guide

Personal portfolio site (Astro 7, static output, deployed to GitHub Pages). No framework integrations, no test runner, no linter. The only dependency is `astro`.

## Commands

- `npm run dev` / `astro dev --background`: dev server (see AGENTS.md for managing it)
- `npm run build`: production build into `dist/`; this is the main verification step
- `npm run preview`: serve the built site
- `npx astro check`: type check (only if `@astrojs/check` is installed; do not add it unprompted)

## Structure

- `src/pages/`: routes (`index`, `about`, `work`, `work/[...slug]`, `work/ebooks`, `404`)
- `src/layouts/BaseLayout.astro`: shared page shell
- `src/components/`: `.astro` components; icons live in `IconPaths.ts` and `Icon.astro`
- `src/content.config.ts`: schemas for the `companies`, `books` (TOML) and `work` (Markdown) collections
- `src/content/<collection>/`: content entries; images sit next to the entry in a folder with the same slug
- `src/styles/global.css`: global styles; component styles are scoped in `<style>`

## Conventions

- Read `src/content.config.ts` before touching content; schemas are the source of truth.
- Reuse existing components and CSS variables before creating new ones.
- Use `astro:assets` / the `image()` schema helper for images; always provide `alt`.
- Do not add dependencies or change CI, `CNAME`, or deployment config unless asked.
- Work on `feature/<n>-slug` or `fix/<n>-slug` branches; never commit to `master`.
- Commits are conventional (`feat:`, `fix:`) and reference the issue (`Refs #n`).

## Skills and agents

See `.claude/README.md`.
