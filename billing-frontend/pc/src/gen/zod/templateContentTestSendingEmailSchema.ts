import { z } from "zod"

export const templateContentTestSendingEmailSchema = z.object({
  email_template_id: z.number(),
  language_id: z.number(),
  subject: z.string().min(1),
  html_content: z.string().nullable(),
  text_content: z.string().nullable(),
  template_context: z.object({}).catchall(z.string()).nullable(),
  email: z.string().email().min(1),
})
