import type { AdminUserList } from "../AdminUserList"

export type ApiV1UserAdminUserListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      q?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
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

export type ApiV1UserAdminUserListQueryResponse = {
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
  results: AdminUserList[]
}
export type ApiV1UserAdminUserListQuery = {
  Response: ApiV1UserAdminUserListQueryResponse
  QueryParams: ApiV1UserAdminUserListQueryParams
}
