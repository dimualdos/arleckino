import type { LogsActions } from "../LogsActions"

export type ApiV1ActionsAdminLogsTypeStatusReadPathParams = {
  /**
   * @type string
   */
  actionStatusTypeId: string
  /**
   * @type string
   */
  actionTypeId: string
}

export type ApiV1ActionsAdminLogsTypeStatusReadQueryParams =
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

export type ApiV1ActionsAdminLogsTypeStatusReadQueryResponse = {
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
export type ApiV1ActionsAdminLogsTypeStatusReadQuery = {
  Response: ApiV1ActionsAdminLogsTypeStatusReadQueryResponse
  PathParams: ApiV1ActionsAdminLogsTypeStatusReadPathParams
  QueryParams: ApiV1ActionsAdminLogsTypeStatusReadQueryParams
}
