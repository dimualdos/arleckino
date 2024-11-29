export type ApiV1BillingAdminPaymentTransactionAggregateListQueryParams =
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
      user_id?: string
    }
  | undefined

export type ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse = any | null
export type ApiV1BillingAdminPaymentTransactionAggregateListQuery = {
  Response: ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse
  QueryParams: ApiV1BillingAdminPaymentTransactionAggregateListQueryParams
}
