import { z } from "zod"

export const withdrawalWalletConfirmSchema = z.object({ token: z.string().min(1) })
