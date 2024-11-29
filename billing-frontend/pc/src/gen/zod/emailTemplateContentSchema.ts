import { emailTemplateContentImageSchema } from "./emailTemplateContentImageSchema"
import { z } from "zod"

export const emailTemplateContentSchema = z.object({
  id: z.number().readonly().optional(),
  email_template: z.number(),
  language: z.number(),
  html_content: z.string().nullish(),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  images: z.array(z.lazy(() => emailTemplateContentImageSchema)).optional(),
})
