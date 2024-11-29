import { z } from "zod"

export const languageSchema = z.object({
  id: z.number().readonly().optional(),
  is_default: z.string().readonly().optional(),
  code: z.string().min(1).max(10),
  name: z.string().min(1).max(255),
  is_active: z.boolean().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
})
