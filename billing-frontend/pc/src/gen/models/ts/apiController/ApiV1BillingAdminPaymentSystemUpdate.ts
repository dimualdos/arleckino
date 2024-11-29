import type { PaymentSystemDetail } from "../PaymentSystemDetail"

export type ApiV1BillingAdminPaymentSystemUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Payment system.
   * @type integer
   */
  id: number
}

export type ApiV1BillingAdminPaymentSystemUpdateMutationRequest = Omit<NonNullable<PaymentSystemDetail>, "id">

export type ApiV1BillingAdminPaymentSystemUpdateMutationResponse = PaymentSystemDetail
export namespace ApiV1BillingAdminPaymentSystemUpdateMutation {
  export type Response = ApiV1BillingAdminPaymentSystemUpdateMutationResponse
  export type Request = ApiV1BillingAdminPaymentSystemUpdateMutationRequest
  export type PathParams = ApiV1BillingAdminPaymentSystemUpdatePathParams
}
