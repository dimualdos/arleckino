import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceAdminMinistraListCreate201 = MinistraServer

export type ApiV1ServiceAdminMinistraListCreateMutationRequest = Omit<NonNullable<MinistraServer>, "id" | "aura_url" | "mag_url" | "android_url" | "stalker_url" | "created_at">

export type ApiV1ServiceAdminMinistraListCreateMutationResponse = MinistraServer
export namespace ApiV1ServiceAdminMinistraListCreateMutation {
  export type Response = ApiV1ServiceAdminMinistraListCreateMutationResponse
  export type Request = ApiV1ServiceAdminMinistraListCreateMutationRequest
  export type Errors = ApiV1ServiceAdminMinistraListCreate201
}
