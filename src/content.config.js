"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collections = void 0;
var astro_content_1 = require("astro:content");
var loaders_1 = require("astro/loaders");
var zod_1 = require("astro/zod");
var welcome = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/welcome', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            slogan: zod_1.z.string(),
            description: zod_1.z.string(),
            image: zod_1.z.string().optional(),
        });
    },
});
var statistics = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/statistics', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            value: zod_1.z.string(),
        });
    },
});
var recruitmentProcess = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/recruitmentProcess', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            description: zod_1.z.string(),
            image: zod_1.z.string().optional(),
        });
    },
});
var automation = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/automation', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            description: zod_1.z.string(),
            image: zod_1.z.string().optional(),
        });
    },
});
var choosingRocman = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/choosingRocman', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            description: zod_1.z.string(),
        });
    },
});
var feedback = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/feedback', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            name: zod_1.z.string(),
            tagline: zod_1.z.string(),
            description: zod_1.z.string(),
        });
    },
});
var data = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/data', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            number: zod_1.z.string(),
            description: zod_1.z.string(),
        });
    },
});
var blog = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            title: zod_1.z.string(),
            draft: zod_1.z.boolean().or(zod_1.z.string()).optional(),
            description: zod_1.z.string(),
            image: zod_1.z.string().optional(),
        });
    },
});
var team = (0, astro_content_1.defineCollection)({
    loader: (0, loaders_1.glob)({ base: './src/content/team', pattern: '**/*.{md,mdx}' }),
    schema: function () {
        return zod_1.z.object({
            name: zod_1.z.string(),
            role: zod_1.z.string(),
            image: zod_1.z.string().optional(),
        });
    },
});
exports.collections = {
    welcome: welcome,
    statistics: statistics,
    recruitmentProcess: recruitmentProcess,
    automation: automation,
    choosingRocman: choosingRocman,
    feedback: feedback,
    data: data,
    blog: blog,
    team: team,
};
