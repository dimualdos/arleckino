import type { AdminGroup } from "../AdminGroup"

export type ApiV1PermissionsAdminGroupsListQueryParams =
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

export type ApiV1PermissionsAdminGroupsListQueryResponse = {
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
  results: AdminGroup[]
}
export type ApiV1PermissionsAdminGroupsListQuery = {
  Response: ApiV1PermissionsAdminGroupsListQueryResponse
  QueryParams: ApiV1PermissionsAdminGroupsListQueryParams
}
