import type { ReferralBalanceWithdraw } from "../ReferralBalanceWithdraw"

export type ApiV1UserReferralsBalanceTransferCreate201 = ReferralBalanceWithdraw

export type ApiV1UserReferralsBalanceTransferCreateMutationRequest = Omit<NonNullable<ReferralBalanceWithdraw>, "balance" | "referral_balance">

export type ApiV1UserReferralsBalanceTransferCreateMutationResponse = ReferralBalanceWithdraw
export namespace ApiV1UserReferralsBalanceTransferCreateMutation {
  export type Response = ApiV1UserReferralsBalanceTransferCreateMutationResponse
  export type Request = ApiV1UserReferralsBalanceTransferCreateMutationRequest
  export type Errors = ApiV1UserReferralsBalanceTransferCreate201
}
