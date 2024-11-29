import type { ReferralLinkClickThrough } from "../ReferralLinkClickThrough"

export type ApiV1UserReferralsLinkClickThroughsListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      status?: string
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

export type ApiV1UserReferralsLinkClickThroughsListQueryResponse = {
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
  results: ReferralLinkClickThrough[]
}
export type ApiV1UserReferralsLinkClickThroughsListQuery = {
  Response: ApiV1UserReferralsLinkClickThroughsListQueryResponse
  QueryParams: ApiV1UserReferralsLinkClickThroughsListQueryParams
}
