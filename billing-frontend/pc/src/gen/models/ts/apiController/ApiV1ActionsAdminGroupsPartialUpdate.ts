import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsAdminGroupsPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminGroupsPartialUpdateMutationRequest = Omit<NonNullable<ActionGroup>, "id">

export type ApiV1ActionsAdminGroupsPartialUpdateMutationResponse = ActionGroup
export namespace ApiV1ActionsAdminGroupsPartialUpdateMutation {
  export type Response = ApiV1ActionsAdminGroupsPartialUpdateMutationResponse
  export type Request = ApiV1ActionsAdminGroupsPartialUpdateMutationRequest
  export type PathParams = ApiV1ActionsAdminGroupsPartialUpdatePathParams
}
