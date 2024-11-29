import { templateContentSchema } from "./templateContentSchema"
import { z } from "zod"

export const templateDetailSchema = z.object({
  id: z.number().readonly().optional(),
  type: z.enum([`email`, `notification`]).optional(),
  name: z.string().min(1).max(255),
  template_name: z.string().min(1).max(255),
  description: z.string().nullish(),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  template_aliases: z.string().nullish(),
  template_params: z.string().nullish(),
  email_template: z.number().nullish(),
  contents: z.array(z.lazy(() => templateContentSchema)),
})
