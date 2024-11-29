export type ApiV1UserAdminUserDeviceLogsListPathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceLogsListQueryParams =
  | {
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

export type ApiV1UserAdminUserDeviceLogsListQueryResponse = any | null
export type ApiV1UserAdminUserDeviceLogsListQuery = {
  Response: ApiV1UserAdminUserDeviceLogsListQueryResponse
  PathParams: ApiV1UserAdminUserDeviceLogsListPathParams
  QueryParams: ApiV1UserAdminUserDeviceLogsListQueryParams
}
