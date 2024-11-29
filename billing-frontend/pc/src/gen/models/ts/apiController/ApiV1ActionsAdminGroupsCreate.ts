import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsAdminGroupsCreate201 = ActionGroup

export type ApiV1ActionsAdminGroupsCreateMutationRequest = Omit<NonNullable<ActionGroup>, "id">

export type ApiV1ActionsAdminGroupsCreateMutationResponse = ActionGroup
export namespace ApiV1ActionsAdminGroupsCreateMutation {
  export type Response = ApiV1ActionsAdminGroupsCreateMutationResponse
  export type Request = ApiV1ActionsAdminGroupsCreateMutationRequest
  export type Errors = ApiV1ActionsAdminGroupsCreate201
}
