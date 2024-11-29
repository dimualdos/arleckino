import type { AdminUserDeviceSubscriptionCancel } from "../AdminUserDeviceSubscriptionCancel"

export type ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceCancelSubscriptionCreate201 = AdminUserDeviceSubscriptionCancel

export type ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest = AdminUserDeviceSubscriptionCancel

export type ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse = AdminUserDeviceSubscriptionCancel
export namespace ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutation {
  export type Response = ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse
  export type Request = ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams
  export type Errors = ApiV1UserAdminUserDeviceCancelSubscriptionCreate201
}
