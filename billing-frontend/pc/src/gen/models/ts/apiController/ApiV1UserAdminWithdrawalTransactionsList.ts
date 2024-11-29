import type { WithdrawalTransaction } from "../WithdrawalTransaction"

export type ApiV1UserAdminWithdrawalTransactionsListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      status?: string
      /**
       * @type string | undefined
       */
      withdrawal_system?: string
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
      /**
       * @type string | undefined
       */
      user_name?: string
      /**
       * @type string | undefined
       */
      user_id?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
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

export type ApiV1UserAdminWithdrawalTransactionsListQueryResponse = {
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
export type ApiV1UserAdminWithdrawalTransactionsListQuery = {
  Response: ApiV1UserAdminWithdrawalTransactionsListQueryResponse
  QueryParams: ApiV1UserAdminWithdrawalTransactionsListQueryParams
}
