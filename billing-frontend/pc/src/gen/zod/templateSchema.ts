import { z } from "zod"

export const templateSchema = z.object({
  id: z.number().readonly().optional(),
  name: z.string().min(1).max(255),
  template_name: z.string().min(1).max(255),
  description: z.string().nullish(),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  type: z.enum([`email`, `notification`]).optional(),
  template_aliases: z.string().nullish(),
  template_params: z.string().nullish(),
  email_template: z.number().nullish(),
})
