import type { ActionType } from "../ActionType"

export type ApiV1ActionsAdminTypesReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminTypesReadQueryResponse = ActionType
export type ApiV1ActionsAdminTypesReadQuery = {
  Response: ApiV1ActionsAdminTypesReadQueryResponse
  PathParams: ApiV1ActionsAdminTypesReadPathParams
}
