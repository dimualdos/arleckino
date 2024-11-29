import { z } from "zod"
import { withdrawalWalletCreateSchema } from "../withdrawalWalletCreateSchema"

export const apiV1UserProfileWithdrawalWalletsCreate201Schema = z.lazy(() => withdrawalWalletCreateSchema)
export const apiV1UserProfileWithdrawalWalletsCreateMutationRequestSchema = z.lazy(() => withdrawalWalletCreateSchema)
export const apiV1UserProfileWithdrawalWalletsCreateMutationResponseSchema = z.lazy(() => withdrawalWalletCreateSchema)
