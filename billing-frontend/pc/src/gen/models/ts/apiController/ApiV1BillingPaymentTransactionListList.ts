import type { PaymentTransaction } from "../PaymentTransaction"

export type ApiV1BillingPaymentTransactionListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      transaction_type?: string
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

export type ApiV1BillingPaymentTransactionListListQueryResponse = {
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
  results: PaymentTransaction[]
}
export type ApiV1BillingPaymentTransactionListListQuery = {
  Response: ApiV1BillingPaymentTransactionListListQueryResponse
  QueryParams: ApiV1BillingPaymentTransactionListListQueryParams
}
