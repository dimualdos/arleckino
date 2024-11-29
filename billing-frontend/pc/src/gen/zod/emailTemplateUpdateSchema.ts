import { emailTemplateContentUpdateSchema } from "./emailTemplateContentUpdateSchema"
import { z } from "zod"

export const emailTemplateUpdateSchema = z.object({
  id: z.number().readonly().optional(),
  name: z.string().min(1).max(255),
  description: z.string().nullish(),
  is_active: z.boolean().optional(),
  contents: z.array(z.lazy(() => emailTemplateContentUpdateSchema)),
})
