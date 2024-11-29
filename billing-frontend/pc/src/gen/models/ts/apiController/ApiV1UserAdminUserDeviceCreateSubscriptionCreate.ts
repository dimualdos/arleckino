import type { AdminUserDeviceAddSubscription } from "../AdminUserDeviceAddSubscription"

export type ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceCreateSubscriptionCreate201 = AdminUserDeviceAddSubscription

export type ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest = AdminUserDeviceAddSubscription

export type ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse = AdminUserDeviceAddSubscription
export namespace ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutation {
  export type Response = ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse
  export type Request = ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams
  export type Errors = ApiV1UserAdminUserDeviceCreateSubscriptionCreate201
}
