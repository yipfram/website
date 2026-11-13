import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        header: z.string().optional(),
        tags: z.array(z.string()).default([]),
        createdAt: z.date(),
        related: z.array(z.string()).default([]),
        special: z.boolean().default(false),
        indicatorsHidden: z.boolean().default(false),
      }),
    }),
  },
})
