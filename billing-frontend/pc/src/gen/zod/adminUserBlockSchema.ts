import { z } from "zod"

export const adminUserBlockSchema = z.object({
  id: z.number().readonly().optional(),
  reason: z.string().min(1),
  canceled: z.boolean().optional(),
  cancel_reason: z.string().nullish(),
  block_at: z.string().optional(),
  expires_at: z.string().nullish(),
})
