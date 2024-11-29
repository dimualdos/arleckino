import type { PaymentTransaction } from "../PaymentTransaction"

export type ApiV1BillingAdminPaymentTransactionListListQueryParams =
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
       * @type string | undefined
       */
      user_id?: string
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

export type ApiV1BillingAdminPaymentTransactionListListQueryResponse = {
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
export type ApiV1BillingAdminPaymentTransactionListListQuery = {
  Response: ApiV1BillingAdminPaymentTransactionListListQueryResponse
  QueryParams: ApiV1BillingAdminPaymentTransactionListListQueryParams
}
