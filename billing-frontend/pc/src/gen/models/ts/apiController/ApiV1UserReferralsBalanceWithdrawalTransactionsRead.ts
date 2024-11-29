import type { WithdrawalTransactionUpdate } from "../WithdrawalTransactionUpdate"

export type ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponse = WithdrawalTransactionUpdate
export type ApiV1UserReferralsBalanceWithdrawalTransactionsReadQuery = {
  Response: ApiV1UserReferralsBalanceWithdrawalTransactionsReadQueryResponse
  PathParams: ApiV1UserReferralsBalanceWithdrawalTransactionsReadPathParams
}
