import { z } from "zod"

export const emailTemplateContentUpdateSchema = z.object({ id: z.number().readonly().optional(), language: z.number(), html_content: z.string().nullish() })
