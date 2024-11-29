export type ApiV1UserAdminStatisticsUsersGeneralListQueryParams =
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

export type ApiV1UserAdminStatisticsUsersGeneralListQueryResponse = any | null
export type ApiV1UserAdminStatisticsUsersGeneralListQuery = {
  Response: ApiV1UserAdminStatisticsUsersGeneralListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsUsersGeneralListQueryParams
}
