import { z } from "zod"

export const helpDeskCaseCopyrightHolderCreateSchema = z.object({
  captcha_token: z.string().min(1),
  user_email: z.string().min(1),
  subject: z.string().min(1),
  content: z.string().min(1),
  user_full_name: z.string().min(1),
})
