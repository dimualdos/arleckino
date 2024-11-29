import { z } from "zod"

export const adminUserBalanceChangeSchema = z.object({ balance: z.number(), reason: z.string().min(1) })
