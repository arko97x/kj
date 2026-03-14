import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const letters = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/letters' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      stamp: image(),
      kjStamp: z.union([z.literal(1), z.literal(2)]).default(1),
      rotation: z.number().default(0),
      offsetX: z.number().default(0),
      offsetY: z.number().default(0),
    }),
});

export const collections = { letters };
