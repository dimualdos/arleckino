import type { ReferralLinkClickThrough } from "../ReferralLinkClickThrough"

export type ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams =
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

export type ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse = {
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
export type ApiV1UserAdminUserReferralsLinkClickThroughsListQuery = {
  Response: ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse
  PathParams: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams
  QueryParams: ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams
}
