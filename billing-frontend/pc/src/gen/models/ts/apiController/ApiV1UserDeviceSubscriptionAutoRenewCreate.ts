import type { DeviceSubscriptionAutoRenew } from "../DeviceSubscriptionAutoRenew"

export type ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceSubscriptionAutoRenewCreate201 = DeviceSubscriptionAutoRenew

export type ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest = DeviceSubscriptionAutoRenew

export type ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse = DeviceSubscriptionAutoRenew
export namespace ApiV1UserDeviceSubscriptionAutoRenewCreateMutation {
  export type Response = ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse
  export type Request = ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest
  export type PathParams = ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams
  export type Errors = ApiV1UserDeviceSubscriptionAutoRenewCreate201
}
