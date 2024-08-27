import { z } from "zod";

export const createSchema = z.object({
    title: z.string(),
    description: z.string(),
})

export const getSinglePostSchema = z.object({
    id: z.string()
})

export const getAllPosttsQuerySchema = z.object({
    page:z.number({coerce:true}).optional(),
    limit: z.number({coerce:true}).optional(),
    status:z.number({coerce:true}).optional(),
    title:z.number({coerce:true}).optional()
})