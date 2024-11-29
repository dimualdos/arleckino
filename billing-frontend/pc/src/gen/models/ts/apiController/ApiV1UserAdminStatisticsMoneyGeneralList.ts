export type ApiV1UserAdminStatisticsMoneyGeneralListQueryParams =
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

export type ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse = any | null
export type ApiV1UserAdminStatisticsMoneyGeneralListQuery = {
  Response: ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsMoneyGeneralListQueryParams
}
