import { z } from "zod"

export const emailTemplateContentImageSchema = z.object({
  id: z.number().readonly().optional(),
  image: z.string().readonly().optional(),
  email_template_content: z.number().nullish(),
  tmp_email_template_content_id: z.string().uuid().nullish(),
})
