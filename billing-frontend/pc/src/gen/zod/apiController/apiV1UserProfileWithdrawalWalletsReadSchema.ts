import { z } from "zod"
import { withdrawalWalletSchema } from "../withdrawalWalletSchema"

export const apiV1UserProfileWithdrawalWalletsReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserProfileWithdrawalWalletsReadQueryResponseSchema = z.lazy(() => withdrawalWalletSchema)
