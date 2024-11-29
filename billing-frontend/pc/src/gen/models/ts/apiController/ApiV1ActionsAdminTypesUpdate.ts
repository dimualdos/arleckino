import type { ActionType } from "../ActionType"

export type ApiV1ActionsAdminTypesUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminTypesUpdateMutationRequest = Omit<NonNullable<ActionType>, "id" | "statuses" | "label">

export type ApiV1ActionsAdminTypesUpdateMutationResponse = ActionType
export namespace ApiV1ActionsAdminTypesUpdateMutation {
  export type Response = ApiV1ActionsAdminTypesUpdateMutationResponse
  export type Request = ApiV1ActionsAdminTypesUpdateMutationRequest
  export type PathParams = ApiV1ActionsAdminTypesUpdatePathParams
}
