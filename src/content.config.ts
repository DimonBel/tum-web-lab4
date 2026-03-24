import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const welcome = defineCollection({
	loader: glob({ base: './src/content/welcome', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			slogan: z.string(),
			description: z.string(),
			image: z.string().optional(),
		}),
});

const statistics = defineCollection({
	loader: glob({ base: './src/content/statistics', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			value: z.string(),
		}),
});

const recruitmentProcess = defineCollection({
	loader: glob({ base: './src/content/recruitmentProcess', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
		}),
});

const automation = defineCollection({
	loader: glob({ base: './src/content/automation', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
		}),
});

const choosingRocman = defineCollection({
	loader: glob({ base: './src/content/choosingRocman', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
		}),
});

const feedback = defineCollection({
	loader: glob({ base: './src/content/feedback', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			name: z.string(),
			tagline: z.string(),
			description: z.string(),
		}),
});

const data = defineCollection({
	loader: glob({ base: './src/content/data', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			number: z.string(),
			description: z.string(),
		}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
		}),
});

const team = defineCollection({
	loader: glob({ base: './src/content/team', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			name: z.string(),
			role: z.string(),
			image: z.string().optional(),
		}),
});

export const collections = {
	welcome,
	statistics,
	recruitmentProcess,
	automation,
	choosingRocman,
	feedback,
	data,
	blog,
	team,
};
