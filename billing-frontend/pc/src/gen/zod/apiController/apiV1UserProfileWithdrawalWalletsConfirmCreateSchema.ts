import { z } from "zod"
import { withdrawalWalletConfirmSchema } from "../withdrawalWalletConfirmSchema"

export const apiV1UserProfileWithdrawalWalletsConfirmCreate201Schema = z.lazy(() => withdrawalWalletConfirmSchema)
export const apiV1UserProfileWithdrawalWalletsConfirmCreateMutationRequestSchema = z.lazy(() => withdrawalWalletConfirmSchema)
export const apiV1UserProfileWithdrawalWalletsConfirmCreateMutationResponseSchema = z.lazy(() => withdrawalWalletConfirmSchema)
