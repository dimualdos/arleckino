import type { WithdrawalTransaction } from "../WithdrawalTransaction"

export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams =
  | {
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
      /**
       * @description The initial index from which to return the results.
       * @type integer | undefined
       */
      offset?: number
    }
  | undefined

export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse = {
  /**
   * @type integer
   */
  count: number
  /**
   * @type string,null | undefined uri
   */
  next?: string | null
  /**
   * @type string,null | undefined uri
   */
  previous?: string | null
  /**
   * @type array
   */
  results: WithdrawalTransaction[]
}
export type ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQuery = {
  Response: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse
  PathParams: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams
  QueryParams: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams
}
