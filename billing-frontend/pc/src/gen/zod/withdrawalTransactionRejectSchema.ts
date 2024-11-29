import { z } from "zod"

export const withdrawalTransactionRejectSchema = z.object({ reason: z.string().min(1) })
