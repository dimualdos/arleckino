import type { AdminUserDeviceUpdate } from "../AdminUserDeviceUpdate"

export type ApiV1UserAdminUserDeviceUpdatePathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceUpdateMutationRequest = AdminUserDeviceUpdate

export type ApiV1UserAdminUserDeviceUpdateMutationResponse = AdminUserDeviceUpdate
export namespace ApiV1UserAdminUserDeviceUpdateMutation {
  export type Response = ApiV1UserAdminUserDeviceUpdateMutationResponse
  export type Request = ApiV1UserAdminUserDeviceUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserDeviceUpdatePathParams
}
