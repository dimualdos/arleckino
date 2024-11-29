import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceAdminMinistraPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this ministra server.
   * @type integer
   */
  id: number
}

export type ApiV1ServiceAdminMinistraPartialUpdateMutationRequest = Omit<NonNullable<MinistraServer>, "id" | "aura_url" | "mag_url" | "android_url" | "stalker_url" | "created_at">

export type ApiV1ServiceAdminMinistraPartialUpdateMutationResponse = MinistraServer
export namespace ApiV1ServiceAdminMinistraPartialUpdateMutation {
  export type Response = ApiV1ServiceAdminMinistraPartialUpdateMutationResponse
  export type Request = ApiV1ServiceAdminMinistraPartialUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminMinistraPartialUpdatePathParams
}
