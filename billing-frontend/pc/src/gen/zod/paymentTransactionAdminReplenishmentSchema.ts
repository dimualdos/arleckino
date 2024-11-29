import { z } from "zod"

export const paymentTransactionAdminReplenishmentSchema = z.object({ user_id: z.number(), payment_system_id: z.number(), amount: z.number(), is_used_bonuses: z.boolean() })
