export type ApiV1BillingPaymentTransactionConfirmListPathParams = {
  /**
   * @type string
   */
  payment_system_id: string
}

export type ApiV1BillingPaymentTransactionConfirmListQueryParams =
  | {
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
      /**
       * @description The initial index from which to return the results.
       * @type integer | undefined
       */
      offset?: number
    }
  | undefined

export type ApiV1BillingPaymentTransactionConfirmListQueryResponse = any | null
export type ApiV1BillingPaymentTransactionConfirmListQuery = {
  Response: ApiV1BillingPaymentTransactionConfirmListQueryResponse
  PathParams: ApiV1BillingPaymentTransactionConfirmListPathParams
  QueryParams: ApiV1BillingPaymentTransactionConfirmListQueryParams
}
