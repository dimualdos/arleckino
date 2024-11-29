import { z } from "zod"
import { referralBalanceWithdrawSchema } from "../referralBalanceWithdrawSchema"

export const apiV1UserReferralsBalanceTransferCreate201Schema = z.lazy(() => referralBalanceWithdrawSchema)
export const apiV1UserReferralsBalanceTransferCreateMutationRequestSchema = z.lazy(() => referralBalanceWithdrawSchema).schema.and(z.object({ balance: z.never(), referral_balance: z.never() }))
export const apiV1UserReferralsBalanceTransferCreateMutationResponseSchema = z.lazy(() => referralBalanceWithdrawSchema)
