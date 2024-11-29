import type { PaymentSystemDetail } from "../PaymentSystemDetail"

export type ApiV1BillingAdminPaymentSystemCreateCreate201 = PaymentSystemDetail

export type ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest = Omit<NonNullable<PaymentSystemDetail>, "id">

export type ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse = PaymentSystemDetail
export namespace ApiV1BillingAdminPaymentSystemCreateCreateMutation {
  export type Response = ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse
  export type Request = ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest
  export type Errors = ApiV1BillingAdminPaymentSystemCreateCreate201
}
