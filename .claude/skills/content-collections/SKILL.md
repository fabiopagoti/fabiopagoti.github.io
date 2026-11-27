---
name: content-collections
description: Add or update collections and their entries (companies, books, work, etc) as well as  their frontmatter/TOML fields. Use for content or schema changes.
---

1. Read `src/content.config.ts` for the collection's required fields and defaults.
2. `companies` and `books` are one TOML file per entry in `src/content/<collection>/`; copy `src/content/companies/example-company.sample` as a starting point for companies.
3. Images (`logo`, `cover`, `images[].src`) are relative paths validated by `image()`; place them in `src/content/<collection>/<slug>/`.
4. `work` entries are Markdown with frontmatter (`title`, `sequence`, `description`, `tags`, `img` required).
5. When changing the schema, update every existing entry so the build still passes, and prefer optional or defaulted fields.
6. Run `npm run build`; schema errors name the offending file and field.

Docs: https://docs.astro.build/en/guides/content-collections/
