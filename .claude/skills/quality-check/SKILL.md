---
name: quality-check
description: Review changed pages and components for accessibility, SEO/metadata, and image usage. Use before opening a PR that touches UI.
---

Inspect the changes (`git diff master...HEAD`) and report findings; fix only what is in scope.

- Accessibility: one `h1` per page, logical heading order, `alt` on every image (empty only if decorative), labels or `aria-label` on icon-only links/buttons, `rel="noopener"` with `target="_blank"`, visible focus, sufficient contrast in light and dark themes (`ThemeToggle`).
- SEO/metadata: title and description are set through `MainHead.astro`/`BaseLayout.astro`, canonical and social tags still render, links are meaningful.
- Images: use `astro:assets` (`Image`/`Picture`) or the `image()` schema type, set width/height to avoid layout shift, `loading="lazy"` below the fold.
- Check the built output in `dist/` (`npm run build`) when verifying head tags.
