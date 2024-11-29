import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsAdminGroupsListQueryParams =
  | {
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
      /**
       * @description The initial index from which to return the results.
       * @type integer | undefined
       */
      offset?: number
    }
  | undefined

export type ApiV1ActionsAdminGroupsListQueryResponse = {
  /**
   * @type integer
   */
  count: number
  /**
   * @type string,null | undefined uri
   */
  next?: string | null
  /**
   * @type string,null | undefined uri
   */
  previous?: string | null
  /**
   * @type array
   */
  results: ActionGroup[]
}
export type ApiV1ActionsAdminGroupsListQuery = {
  Response: ApiV1ActionsAdminGroupsListQueryResponse
  QueryParams: ApiV1ActionsAdminGroupsListQueryParams
}
