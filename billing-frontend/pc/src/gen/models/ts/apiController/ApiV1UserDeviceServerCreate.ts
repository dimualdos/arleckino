import type { DeviceBindServer } from "../DeviceBindServer"

export type ApiV1UserDeviceServerCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceServerCreate201 = DeviceBindServer

export type ApiV1UserDeviceServerCreateMutationRequest = DeviceBindServer

export type ApiV1UserDeviceServerCreateMutationResponse = DeviceBindServer
export namespace ApiV1UserDeviceServerCreateMutation {
  export type Response = ApiV1UserDeviceServerCreateMutationResponse
  export type Request = ApiV1UserDeviceServerCreateMutationRequest
  export type PathParams = ApiV1UserDeviceServerCreatePathParams
  export type Errors = ApiV1UserDeviceServerCreate201
}
