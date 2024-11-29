import type { WithdrawalTransactionReject } from "../WithdrawalTransactionReject"

export type ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams = {
  /**
   * @description A unique integer value identifying this withdrawal transaction.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalTransactionsRejectCreate201 = WithdrawalTransactionReject

export type ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest = WithdrawalTransactionReject

export type ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse = WithdrawalTransactionReject
export namespace ApiV1UserAdminWithdrawalTransactionsRejectCreateMutation {
  export type Response = ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse
  export type Request = ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest
  export type PathParams = ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams
  export type Errors = ApiV1UserAdminWithdrawalTransactionsRejectCreate201
}
