import type { LogsActions } from "../LogsActions"

export type ApiV1ActionsUserLogsListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      group?: string
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
      /**
       * @type string | undefined
       */
      q?: string
      /**
       * @description A page number within the paginated result set.
       * @type integer | undefined
       */
      page?: number
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
    }
  | undefined

export type ApiV1ActionsUserLogsListQueryResponse = {
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
export type ApiV1ActionsUserLogsListQuery = {
  Response: ApiV1ActionsUserLogsListQueryResponse
  QueryParams: ApiV1ActionsUserLogsListQueryParams
}
