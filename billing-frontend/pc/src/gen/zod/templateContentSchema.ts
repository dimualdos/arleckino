import { templateContentImageSchema } from "./templateContentImageSchema"
import { z } from "zod"

export const templateContentSchema = z.object({
  id: z.number().readonly().optional(),
  template: z.number(),
  language: z.number(),
  subject: z.string().max(255).nullish(),
  html_content: z.string().nullish(),
  text_content: z.string().nullish(),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  images: z.array(z.lazy(() => templateContentImageSchema)).optional(),
})
