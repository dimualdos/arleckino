import type { PaymentSystem } from "../PaymentSystem"

export type ApiV1BillingPaymentSystemReadPathParams = {
  /**
   * @description A unique integer value identifying this Payment system.
   * @type integer
   */
  id: number
}

export type ApiV1BillingPaymentSystemReadQueryResponse = PaymentSystem
export type ApiV1BillingPaymentSystemReadQuery = {
  Response: ApiV1BillingPaymentSystemReadQueryResponse
  PathParams: ApiV1BillingPaymentSystemReadPathParams
}
