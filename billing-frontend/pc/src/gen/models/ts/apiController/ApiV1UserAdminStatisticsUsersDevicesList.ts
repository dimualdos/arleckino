export type ApiV1UserAdminStatisticsUsersDevicesListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
    }
  | undefined

export type ApiV1UserAdminStatisticsUsersDevicesListQueryResponse = any | null
export type ApiV1UserAdminStatisticsUsersDevicesListQuery = {
  Response: ApiV1UserAdminStatisticsUsersDevicesListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsUsersDevicesListQueryParams
}
