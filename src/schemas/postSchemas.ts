import { z } from "zod";

export const createSchema = z.object({
    title: z.string(),
    description: z.string(),
})

export const getSinglePostSchema = z.object({
    id: z.string()
})