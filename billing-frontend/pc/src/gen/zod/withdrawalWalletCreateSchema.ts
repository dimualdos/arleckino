import { z } from "zod"

export const withdrawalWalletCreateSchema = z.object({ withdrawal_system_id: z.number(), withdrawal_system_user_identifier: z.string().min(1), currency: z.string().min(1).optional() })
