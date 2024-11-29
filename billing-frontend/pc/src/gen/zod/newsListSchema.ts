import { z } from "zod"

export const newsListSchema = z.object({ id: z.number().readonly().optional(), title: z.string().min(1).max(128), short_text: z.string().nullish(), created_date: z.string().readonly().optional() })
