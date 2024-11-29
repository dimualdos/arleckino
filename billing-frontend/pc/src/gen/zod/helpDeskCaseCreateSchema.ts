import { z } from "zod"

export const helpDeskCaseCreateSchema = z.object({
  user_email: z.string().min(1),
  subject: z.string().min(1),
  content: z.string().min(1),
  content_html: z.string().min(1).nullish(),
  user_full_name: z.string().min(1).nullish(),
  channel: z.string().min(1).nullish(),
  custom_fields: z.object({}).catchall(z.string()).nullish(),
  labels: z.array(z.string()).nullish(),
  language_id: z.number().nullish(),
  attachments: z.array(z.string()).nullish(),
})
