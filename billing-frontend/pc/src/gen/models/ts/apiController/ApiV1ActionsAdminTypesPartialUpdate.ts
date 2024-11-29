import type { ActionType } from "../ActionType"

export type ApiV1ActionsAdminTypesPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminTypesPartialUpdateMutationRequest = Omit<NonNullable<ActionType>, "id" | "statuses" | "label">

export type ApiV1ActionsAdminTypesPartialUpdateMutationResponse = ActionType
export namespace ApiV1ActionsAdminTypesPartialUpdateMutation {
  export type Response = ApiV1ActionsAdminTypesPartialUpdateMutationResponse
  export type Request = ApiV1ActionsAdminTypesPartialUpdateMutationRequest
  export type PathParams = ApiV1ActionsAdminTypesPartialUpdatePathParams
}
