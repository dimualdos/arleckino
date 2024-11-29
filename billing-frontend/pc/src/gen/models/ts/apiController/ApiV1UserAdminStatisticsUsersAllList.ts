export type ApiV1UserAdminStatisticsUsersAllListQueryParams =
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

export type ApiV1UserAdminStatisticsUsersAllListQueryResponse = any | null
export type ApiV1UserAdminStatisticsUsersAllListQuery = {
  Response: ApiV1UserAdminStatisticsUsersAllListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsUsersAllListQueryParams
}
