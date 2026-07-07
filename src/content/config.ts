import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    author: z.string(),
    initials: z.string(),
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    badge: z.string(),
    duration: z.string(),
    description: z.string(),
    lead: z.string(),
    status: z.enum(['active', 'finished', 'on hold', 'discontinued']),
  })
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};
