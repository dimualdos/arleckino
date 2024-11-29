import type { AdminGroup } from "../AdminGroup"

export type ApiV1PermissionsAdminGroupsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this admin group.
   * @type integer
   */
  id: number
}

export type ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest = Omit<NonNullable<AdminGroup>, "id">

export type ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse = AdminGroup
export namespace ApiV1PermissionsAdminGroupsPartialUpdateMutation {
  export type Response = ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse
  export type Request = ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest
  export type PathParams = ApiV1PermissionsAdminGroupsPartialUpdatePathParams
}
