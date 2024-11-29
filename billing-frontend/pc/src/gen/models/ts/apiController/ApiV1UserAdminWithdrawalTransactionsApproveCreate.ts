import type { WithdrawalTransactionApprove } from "../WithdrawalTransactionApprove"

export type ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams = {
  /**
   * @description A unique integer value identifying this withdrawal transaction.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalTransactionsApproveCreate201 = WithdrawalTransactionApprove

export type ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest = WithdrawalTransactionApprove

export type ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse = WithdrawalTransactionApprove
export namespace ApiV1UserAdminWithdrawalTransactionsApproveCreateMutation {
  export type Response = ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse
  export type Request = ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest
  export type PathParams = ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams
  export type Errors = ApiV1UserAdminWithdrawalTransactionsApproveCreate201
}
