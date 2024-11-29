import { faqImageSchema } from "./faqImageSchema"
import { z } from "zod"

export const faqDetailSchema = z.object({
  id: z.number().readonly().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  question_title: z.string().min(1).max(255),
  question_text: z.string().nullish(),
  answers: z.string().readonly().optional(),
  is_published: z.boolean().optional(),
  images: z.array(z.lazy(() => faqImageSchema)).optional(),
  order: z.number().min(0).max(2147483647).optional(),
  language: z.number().optional(),
  tags: z.array(z.string()).optional(),
  number_of_views: z.number().min(0).max(2147483647).optional(),
})
