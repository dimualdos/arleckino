import type { AdminGroup } from "../AdminGroup"

export type ApiV1PermissionsAdminGroupsReadPathParams = {
  /**
   * @description A unique integer value identifying this admin group.
   * @type integer
   */
  id: number
}

export type ApiV1PermissionsAdminGroupsReadQueryResponse = AdminGroup
export type ApiV1PermissionsAdminGroupsReadQuery = {
  Response: ApiV1PermissionsAdminGroupsReadQueryResponse
  PathParams: ApiV1PermissionsAdminGroupsReadPathParams
}
