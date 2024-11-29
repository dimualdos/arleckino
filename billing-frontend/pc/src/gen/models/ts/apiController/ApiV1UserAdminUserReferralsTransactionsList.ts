import type { ReferralTransaction } from "../ReferralTransaction"

export type ApiV1UserAdminUserReferralsTransactionsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReferralsTransactionsListQueryParams =
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

export type ApiV1UserAdminUserReferralsTransactionsListQueryResponse = {
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
export type ApiV1UserAdminUserReferralsTransactionsListQuery = {
  Response: ApiV1UserAdminUserReferralsTransactionsListQueryResponse
  PathParams: ApiV1UserAdminUserReferralsTransactionsListPathParams
  QueryParams: ApiV1UserAdminUserReferralsTransactionsListQueryParams
}
