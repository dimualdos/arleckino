import type { AdminUserDeviceSubscriptionChange } from "../AdminUserDeviceSubscriptionChange"

export type ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceChangeSubscriptionCreate201 = AdminUserDeviceSubscriptionChange

export type ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest = AdminUserDeviceSubscriptionChange

export type ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse = AdminUserDeviceSubscriptionChange
export namespace ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutation {
  export type Response = ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse
  export type Request = ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams
  export type Errors = ApiV1UserAdminUserDeviceChangeSubscriptionCreate201
}
