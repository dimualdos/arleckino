import type { PaymentTransaction } from "../PaymentTransaction"

export type ApiV1BillingPaymentTransactionReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1BillingPaymentTransactionReadQueryResponse = PaymentTransaction
export type ApiV1BillingPaymentTransactionReadQuery = {
  Response: ApiV1BillingPaymentTransactionReadQueryResponse
  PathParams: ApiV1BillingPaymentTransactionReadPathParams
}
