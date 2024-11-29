import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceAdminMinistraUpdatePathParams = {
  /**
   * @description A unique integer value identifying this ministra server.
   * @type integer
   */
  id: number
}

export type ApiV1ServiceAdminMinistraUpdateMutationRequest = Omit<NonNullable<MinistraServer>, "id" | "aura_url" | "mag_url" | "android_url" | "stalker_url" | "created_at">

export type ApiV1ServiceAdminMinistraUpdateMutationResponse = MinistraServer
export namespace ApiV1ServiceAdminMinistraUpdateMutation {
  export type Response = ApiV1ServiceAdminMinistraUpdateMutationResponse
  export type Request = ApiV1ServiceAdminMinistraUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminMinistraUpdatePathParams
}
