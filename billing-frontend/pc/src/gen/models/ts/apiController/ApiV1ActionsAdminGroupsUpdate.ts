import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsAdminGroupsUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminGroupsUpdateMutationRequest = Omit<NonNullable<ActionGroup>, "id">

export type ApiV1ActionsAdminGroupsUpdateMutationResponse = ActionGroup
export namespace ApiV1ActionsAdminGroupsUpdateMutation {
  export type Response = ApiV1ActionsAdminGroupsUpdateMutationResponse
  export type Request = ApiV1ActionsAdminGroupsUpdateMutationRequest
  export type PathParams = ApiV1ActionsAdminGroupsUpdatePathParams
}
