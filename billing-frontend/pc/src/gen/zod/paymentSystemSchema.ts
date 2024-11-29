import { z } from "zod"

export const paymentSystemSchema = z.object({
  id: z.number().readonly().optional(),
  title: z.string().min(1).max(255),
  is_disabled: z.boolean().optional(),
  is_hidden: z.boolean().optional(),
  bonus_percent: z.number().optional(),
})
