import type { LogsActions } from "../LogsActions"

export type ApiV1ActionsAdminLogsUserReadPathParams = {
  /**
   * @type string
   */
  userId: string
}

export type ApiV1ActionsAdminLogsUserReadQueryParams =
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

export type ApiV1ActionsAdminLogsUserReadQueryResponse = {
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
export type ApiV1ActionsAdminLogsUserReadQuery = {
  Response: ApiV1ActionsAdminLogsUserReadQueryResponse
  PathParams: ApiV1ActionsAdminLogsUserReadPathParams
  QueryParams: ApiV1ActionsAdminLogsUserReadQueryParams
}
