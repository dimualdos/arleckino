import type { LogsActions } from "../LogsActions"

export type ApiV1ActionsAdminLogsGroupReadPathParams = {
  /**
   * @type string
   */
  groupId: string
}

export type ApiV1ActionsAdminLogsGroupReadQueryParams =
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

export type ApiV1ActionsAdminLogsGroupReadQueryResponse = {
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
  results: LogsActions[]
}
export type ApiV1ActionsAdminLogsGroupReadQuery = {
  Response: ApiV1ActionsAdminLogsGroupReadQueryResponse
  PathParams: ApiV1ActionsAdminLogsGroupReadPathParams
  QueryParams: ApiV1ActionsAdminLogsGroupReadQueryParams
}
