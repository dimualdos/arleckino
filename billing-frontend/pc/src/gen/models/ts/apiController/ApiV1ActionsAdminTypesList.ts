import type { ActionType } from "../ActionType"

export type ApiV1ActionsAdminTypesListQueryParams =
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

export type ApiV1ActionsAdminTypesListQueryResponse = {
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
  results: ActionType[]
}
export type ApiV1ActionsAdminTypesListQuery = {
  Response: ApiV1ActionsAdminTypesListQueryResponse
  QueryParams: ApiV1ActionsAdminTypesListQueryParams
}
