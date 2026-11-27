---
name: verify-build
description: Build and preview the site to verify a change. Use before committing or opening a PR.
---

1. `npm run build` must succeed. It is the only required check (there is no lint, format, or test script).
2. If `@astrojs/check` is installed, also run `npx astro check`; do not install it just for this.
3. For visual changes, start the preview or dev server in the background per AGENTS.md (`astro dev --background`, then `astro dev status`/`astro dev stop`) and inspect the affected routes.
4. Report the exact commands run and their results.
