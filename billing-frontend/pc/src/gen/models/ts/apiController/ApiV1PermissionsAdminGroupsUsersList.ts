import type { AdminGroupUser } from "../AdminGroupUser"

export type ApiV1PermissionsAdminGroupsUsersListPathParams = {
  /**
   * @type string
   */
  group_id: string
}

export type ApiV1PermissionsAdminGroupsUsersListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      email?: string
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

export type ApiV1PermissionsAdminGroupsUsersListQueryResponse = {
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
  results: AdminGroupUser[]
}
export type ApiV1PermissionsAdminGroupsUsersListQuery = {
  Response: ApiV1PermissionsAdminGroupsUsersListQueryResponse
  PathParams: ApiV1PermissionsAdminGroupsUsersListPathParams
  QueryParams: ApiV1PermissionsAdminGroupsUsersListQueryParams
}
