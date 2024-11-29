import type { PaymentSystemDetail } from "../PaymentSystemDetail"

export type ApiV1BillingAdminPaymentSystemPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Payment system.
   * @type integer
   */
  id: number
}

export type ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest = Omit<NonNullable<PaymentSystemDetail>, "id">

export type ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse = PaymentSystemDetail
export namespace ApiV1BillingAdminPaymentSystemPartialUpdateMutation {
  export type Response = ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse
  export type Request = ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest
  export type PathParams = ApiV1BillingAdminPaymentSystemPartialUpdatePathParams
}
