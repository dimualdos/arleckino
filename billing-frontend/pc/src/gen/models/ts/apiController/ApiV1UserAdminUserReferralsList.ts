import type { Referral } from "../Referral"

export type ApiV1UserAdminUserReferralsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReferralsListQueryParams =
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

export type ApiV1UserAdminUserReferralsListQueryResponse = {
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
  results: Referral[]
}
export type ApiV1UserAdminUserReferralsListQuery = {
  Response: ApiV1UserAdminUserReferralsListQueryResponse
  PathParams: ApiV1UserAdminUserReferralsListPathParams
  QueryParams: ApiV1UserAdminUserReferralsListQueryParams
}
