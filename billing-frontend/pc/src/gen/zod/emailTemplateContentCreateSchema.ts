import { z } from "zod"

export const emailTemplateContentCreateSchema = z.object({ language: z.number(), html_content: z.string().nullish(), tmp_email_template_content_id: z.string().uuid().nullish() })
