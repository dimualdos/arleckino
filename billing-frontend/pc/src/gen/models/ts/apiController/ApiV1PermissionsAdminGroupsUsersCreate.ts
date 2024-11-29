import type { AdminGroupUserCreate } from "../AdminGroupUserCreate"

export type ApiV1PermissionsAdminGroupsUsersCreatePathParams = {
  /**
   * @type string
   */
  group_id: string
}

export type ApiV1PermissionsAdminGroupsUsersCreate201 = AdminGroupUserCreate

export type ApiV1PermissionsAdminGroupsUsersCreateMutationRequest = AdminGroupUserCreate

export type ApiV1PermissionsAdminGroupsUsersCreateMutationResponse = AdminGroupUserCreate
export namespace ApiV1PermissionsAdminGroupsUsersCreateMutation {
  export type Response = ApiV1PermissionsAdminGroupsUsersCreateMutationResponse
  export type Request = ApiV1PermissionsAdminGroupsUsersCreateMutationRequest
  export type PathParams = ApiV1PermissionsAdminGroupsUsersCreatePathParams
  export type Errors = ApiV1PermissionsAdminGroupsUsersCreate201
}
