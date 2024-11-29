export type ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams =
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

export type ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse = any | null
export type ApiV1UserAdminStatisticsMoneyBalanceUsersListQuery = {
  Response: ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams
}
