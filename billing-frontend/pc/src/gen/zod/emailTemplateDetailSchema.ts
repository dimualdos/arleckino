import { emailTemplateContentSchema } from "./emailTemplateContentSchema"
import { z } from "zod"

export const emailTemplateDetailSchema = z.object({
  id: z.number().readonly().optional(),
  name: z.string().min(1).max(255),
  description: z.string().nullish(),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  contents: z.array(z.lazy(() => emailTemplateContentSchema)),
})
