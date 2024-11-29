import type { AdminGroup } from "../AdminGroup"

export type ApiV1PermissionsAdminGroupsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this admin group.
   * @type integer
   */
  id: number
}

export type ApiV1PermissionsAdminGroupsUpdateMutationRequest = Omit<NonNullable<AdminGroup>, "id">

export type ApiV1PermissionsAdminGroupsUpdateMutationResponse = AdminGroup
export namespace ApiV1PermissionsAdminGroupsUpdateMutation {
  export type Response = ApiV1PermissionsAdminGroupsUpdateMutationResponse
  export type Request = ApiV1PermissionsAdminGroupsUpdateMutationRequest
  export type PathParams = ApiV1PermissionsAdminGroupsUpdatePathParams
}
