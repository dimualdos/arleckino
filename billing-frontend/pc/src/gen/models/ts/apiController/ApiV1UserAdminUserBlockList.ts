import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockListQueryParams =
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

export type ApiV1UserAdminUserBlockListQueryResponse = {
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
  results: AdminUserBlock[]
}
export type ApiV1UserAdminUserBlockListQuery = {
  Response: ApiV1UserAdminUserBlockListQueryResponse
  PathParams: ApiV1UserAdminUserBlockListPathParams
  QueryParams: ApiV1UserAdminUserBlockListQueryParams
}
