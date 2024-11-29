import { z } from "zod"

export const faqListSchema = z.object({
  id: z.number().readonly().optional(),
  question_title: z.string().min(1).max(255),
  question_text: z.string().nullish(),
  dt_create: z.string().datetime().optional(),
  language: z.number().optional(),
  is_published: z.boolean().optional(),
  order: z.number().min(0).max(2147483647).optional(),
  tags: z.array(z.string()).optional(),
  number_of_views: z.number().min(0).max(2147483647).optional(),
})
