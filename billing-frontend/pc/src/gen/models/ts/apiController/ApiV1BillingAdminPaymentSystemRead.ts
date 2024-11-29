import type { PaymentSystemDetail } from "../PaymentSystemDetail"

export type ApiV1BillingAdminPaymentSystemReadPathParams = {
  /**
   * @description A unique integer value identifying this Payment system.
   * @type integer
   */
  id: number
}

export type ApiV1BillingAdminPaymentSystemReadQueryResponse = PaymentSystemDetail
export type ApiV1BillingAdminPaymentSystemReadQuery = {
  Response: ApiV1BillingAdminPaymentSystemReadQueryResponse
  PathParams: ApiV1BillingAdminPaymentSystemReadPathParams
}
