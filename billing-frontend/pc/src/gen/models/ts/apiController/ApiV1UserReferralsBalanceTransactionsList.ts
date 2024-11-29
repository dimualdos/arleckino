import type { WithdrawalTransaction } from "../WithdrawalTransaction"

export type ApiV1UserReferralsBalanceTransactionsListQueryParams =
  | {
      /**
       * @description A page number within the paginated result set.
       * @type integer | undefined
       */
      page?: number
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
    }
  | undefined

export type ApiV1UserReferralsBalanceTransactionsListQueryResponse = {
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
export type ApiV1UserReferralsBalanceTransactionsListQuery = {
  Response: ApiV1UserReferralsBalanceTransactionsListQueryResponse
  QueryParams: ApiV1UserReferralsBalanceTransactionsListQueryParams
}
