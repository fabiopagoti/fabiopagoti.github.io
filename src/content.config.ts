import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	companies: defineCollection({
		// One TOML file per company in src/content/companies.
		loader: glob({ base: './src/content/companies', pattern: '*.toml' }),
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				logo: image(),
				website: z.url(),
				order: z.number().default(0),
				joined: z.string(),
				projects: z.string(),
				images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
				technologies: z.array(z.string()).default([]),
			}),
	}),
	books: defineCollection({
		// One TOML file per ebook in src/content/books.
		loader: glob({ base: './src/content/books', pattern: '*.toml' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				cover: image(),
				publishDate: z.coerce.date(),
				download: z.union([z.url(), z.string().startsWith('/')]),
				otherAuthors: z.array(z.string()).default([]),
				order: z.number().default(0),
				description: z.string(),
			}),
	}),
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			href: z.string(),
			sequence: z.number(),
			description: z.string(),
			//publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
