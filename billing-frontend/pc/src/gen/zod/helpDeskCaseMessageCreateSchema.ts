import { z } from "zod"

export const helpDeskCaseMessageCreateSchema = z.object({ content: z.string().min(1), content_html: z.string().min(1).nullish(), attachments: z.array(z.string()).nullish() })
