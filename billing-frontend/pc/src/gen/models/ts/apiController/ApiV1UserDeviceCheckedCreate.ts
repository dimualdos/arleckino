import type { DeviceCheck } from "../DeviceCheck"

export type ApiV1UserDeviceCheckedCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceCheckedCreate201 = DeviceCheck

export type ApiV1UserDeviceCheckedCreateMutationRequest = DeviceCheck

export type ApiV1UserDeviceCheckedCreateMutationResponse = DeviceCheck
export namespace ApiV1UserDeviceCheckedCreateMutation {
  export type Response = ApiV1UserDeviceCheckedCreateMutationResponse
  export type Request = ApiV1UserDeviceCheckedCreateMutationRequest
  export type PathParams = ApiV1UserDeviceCheckedCreatePathParams
  export type Errors = ApiV1UserDeviceCheckedCreate201
}
