import type { WithdrawalTransaction } from "../WithdrawalTransaction"

export type ApiV1UserAdminWithdrawalTransactionsReadPathParams = {
  /**
   * @description A unique integer value identifying this withdrawal transaction.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalTransactionsReadQueryResponse = WithdrawalTransaction
export type ApiV1UserAdminWithdrawalTransactionsReadQuery = {
  Response: ApiV1UserAdminWithdrawalTransactionsReadQueryResponse
  PathParams: ApiV1UserAdminWithdrawalTransactionsReadPathParams
}
