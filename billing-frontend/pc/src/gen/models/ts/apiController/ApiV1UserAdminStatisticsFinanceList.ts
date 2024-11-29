export type ApiV1UserAdminStatisticsFinanceListQueryParams =
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
       * @type string | undefined
       */
      t_type?: string
      /**
       * @type string | undefined
       */
      q?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
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

export type ApiV1UserAdminStatisticsFinanceListQueryResponse = any | null
export type ApiV1UserAdminStatisticsFinanceListQuery = {
  Response: ApiV1UserAdminStatisticsFinanceListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsFinanceListQueryParams
}
