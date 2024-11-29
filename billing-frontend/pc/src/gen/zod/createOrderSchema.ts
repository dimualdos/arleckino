import { z } from "zod"

export const createOrderSchema = z.object({
  device_ids: z.array(z.number()),
  days_amount: z.number().min(30).max(360),
  is_premium: z.boolean().nullable(),
  is_auto_renew: z.boolean().nullable(),
  promocode_transaction_id: z.number().nullish(),
  force: z.boolean().default(false).optional(),
  date_alignment: z.boolean().default(false).optional(),
})
