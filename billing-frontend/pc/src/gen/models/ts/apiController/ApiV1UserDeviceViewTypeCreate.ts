import type { DeviceChangeViewType } from "../DeviceChangeViewType"

export type ApiV1UserDeviceViewTypeCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceViewTypeCreate201 = DeviceChangeViewType

export type ApiV1UserDeviceViewTypeCreateMutationRequest = DeviceChangeViewType

export type ApiV1UserDeviceViewTypeCreateMutationResponse = DeviceChangeViewType
export namespace ApiV1UserDeviceViewTypeCreateMutation {
  export type Response = ApiV1UserDeviceViewTypeCreateMutationResponse
  export type Request = ApiV1UserDeviceViewTypeCreateMutationRequest
  export type PathParams = ApiV1UserDeviceViewTypeCreatePathParams
  export type Errors = ApiV1UserDeviceViewTypeCreate201
}
