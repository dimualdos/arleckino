import type { DeviceSubscriptionToPremium } from "../DeviceSubscriptionToPremium"

export type ApiV1UserDeviceSubscriptionToPremiumCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceSubscriptionToPremiumCreate201 = DeviceSubscriptionToPremium

export type ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest = DeviceSubscriptionToPremium

export type ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse = DeviceSubscriptionToPremium
export namespace ApiV1UserDeviceSubscriptionToPremiumCreateMutation {
  export type Response = ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse
  export type Request = ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest
  export type PathParams = ApiV1UserDeviceSubscriptionToPremiumCreatePathParams
  export type Errors = ApiV1UserDeviceSubscriptionToPremiumCreate201
}
