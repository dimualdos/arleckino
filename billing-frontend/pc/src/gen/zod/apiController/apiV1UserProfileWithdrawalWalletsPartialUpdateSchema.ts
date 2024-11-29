import { z } from "zod"
import { withdrawalWalletCreateSchema } from "../withdrawalWalletCreateSchema"

export const apiV1UserProfileWithdrawalWalletsPartialUpdatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequestSchema = z.lazy(() => withdrawalWalletCreateSchema)
export const apiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponseSchema = z.lazy(() => withdrawalWalletCreateSchema)
