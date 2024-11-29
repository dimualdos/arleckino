import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsAdminGroupsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ActionsAdminGroupsReadQueryResponse = ActionGroup
export type ApiV1ActionsAdminGroupsReadQuery = {
  Response: ApiV1ActionsAdminGroupsReadQueryResponse
  PathParams: ApiV1ActionsAdminGroupsReadPathParams
}
