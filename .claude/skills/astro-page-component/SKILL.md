---
name: astro-page-component
description: Create or update Astro pages, layouts, and shared components in this site. Use when adding a route, editing BaseLayout, or building a component.
---

1. Look at a similar existing file in `src/pages/` or `src/components/` first and match its structure, props typing, and naming.
2. Pages wrap content in `src/layouts/BaseLayout.astro`; do not duplicate head/meta markup (see `MainHead.astro`).
3. Dynamic routes with content use `getCollection`/`getEntry` from `astro:content` and `getStaticPaths` (see `src/pages/work/[...slug].astro`).
4. Type props with an `interface Props` in the frontmatter. Keep styles scoped in `<style>`; reuse variables from `src/styles/global.css`.
5. New icons go in `src/components/IconPaths.ts` and are rendered via `Icon.astro`.
6. Add navigation links in `Nav.astro` only when a new top-level page is created.
7. Finish with the `verify-build` skill.

Docs: https://docs.astro.build/en/guides/routing/ and https://docs.astro.build/en/basics/astro-components/
