export type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams =
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

export type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse = any | null
export type ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQuery = {
  Response: ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams
}
