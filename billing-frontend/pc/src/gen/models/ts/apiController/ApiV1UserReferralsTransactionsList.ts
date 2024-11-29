import type { ReferralTransaction } from "../ReferralTransaction"

export type ApiV1UserReferralsTransactionsListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
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

export type ApiV1UserReferralsTransactionsListQueryResponse = {
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
  results: ReferralTransaction[]
}
export type ApiV1UserReferralsTransactionsListQuery = {
  Response: ApiV1UserReferralsTransactionsListQueryResponse
  QueryParams: ApiV1UserReferralsTransactionsListQueryParams
}
