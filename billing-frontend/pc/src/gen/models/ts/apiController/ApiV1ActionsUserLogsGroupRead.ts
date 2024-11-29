import type { LogsActions } from "../LogsActions"

export type ApiV1ActionsUserLogsGroupReadPathParams = {
  /**
   * @type string
   */
  groupId: string
}

export type ApiV1ActionsUserLogsGroupReadQueryParams =
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

export type ApiV1ActionsUserLogsGroupReadQueryResponse = {
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
export type ApiV1ActionsUserLogsGroupReadQuery = {
  Response: ApiV1ActionsUserLogsGroupReadQueryResponse
  PathParams: ApiV1ActionsUserLogsGroupReadPathParams
  QueryParams: ApiV1ActionsUserLogsGroupReadQueryParams
}
