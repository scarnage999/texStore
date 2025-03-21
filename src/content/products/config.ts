import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        img: z.string(),
        price: z.number(),
        description: z.string(),
    })
})

export const collections = {products}