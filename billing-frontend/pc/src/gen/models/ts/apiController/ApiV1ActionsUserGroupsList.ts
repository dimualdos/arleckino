import type { ActionGroup } from "../ActionGroup"

export type ApiV1ActionsUserGroupsListQueryParams =
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

export type ApiV1ActionsUserGroupsListQueryResponse = {
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
export type ApiV1ActionsUserGroupsListQuery = {
  Response: ApiV1ActionsUserGroupsListQueryResponse
  QueryParams: ApiV1ActionsUserGroupsListQueryParams
}
