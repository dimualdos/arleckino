import type { PaymentTransaction } from "../PaymentTransaction"

export type ApiV1BillingAdminPaymentTransactionReadPathParams = {
  /**
   * @description A unique integer value identifying this payment transaction.
   * @type integer
   */
  id: number
}

export type ApiV1BillingAdminPaymentTransactionReadQueryResponse = PaymentTransaction
export type ApiV1BillingAdminPaymentTransactionReadQuery = {
  Response: ApiV1BillingAdminPaymentTransactionReadQueryResponse
  PathParams: ApiV1BillingAdminPaymentTransactionReadPathParams
}
