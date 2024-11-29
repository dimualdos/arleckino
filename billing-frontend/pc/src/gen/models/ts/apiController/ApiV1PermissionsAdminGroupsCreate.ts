import type { AdminGroupCreate } from "../AdminGroupCreate"

export type ApiV1PermissionsAdminGroupsCreate201 = AdminGroupCreate

export type ApiV1PermissionsAdminGroupsCreateMutationRequest = Omit<NonNullable<AdminGroupCreate>, "id">

export type ApiV1PermissionsAdminGroupsCreateMutationResponse = AdminGroupCreate
export namespace ApiV1PermissionsAdminGroupsCreateMutation {
  export type Response = ApiV1PermissionsAdminGroupsCreateMutationResponse
  export type Request = ApiV1PermissionsAdminGroupsCreateMutationRequest
  export type Errors = ApiV1PermissionsAdminGroupsCreate201
}
