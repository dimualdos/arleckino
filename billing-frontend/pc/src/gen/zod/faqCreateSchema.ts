import { z } from "zod"

export const faqCreateSchema = z.object({
  question_title: z.string().min(1).max(255),
  question_text: z.string().nullish(),
  answers: z.array(z.string().min(1)),
  language: z.number().optional(),
  is_published: z.boolean().optional(),
  order: z.number().min(0).max(2147483647).optional(),
  tmp_faq_id: z.string().uuid().nullish(),
  tags: z.array(z.number()),
})
