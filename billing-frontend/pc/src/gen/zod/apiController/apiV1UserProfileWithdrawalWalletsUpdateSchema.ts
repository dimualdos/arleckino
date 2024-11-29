import { z } from "zod"
import { withdrawalWalletCreateSchema } from "../withdrawalWalletCreateSchema"

export const apiV1UserProfileWithdrawalWalletsUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserProfileWithdrawalWalletsUpdateMutationRequestSchema = z.lazy(() => withdrawalWalletCreateSchema)
export const apiV1UserProfileWithdrawalWalletsUpdateMutationResponseSchema = z.lazy(() => withdrawalWalletCreateSchema)
