import type { Server } from "../Server"

export type ApiV1ServiceAdminServerListCreate201 = Server

export type ApiV1ServiceAdminServerListCreateMutationRequest = Omit<NonNullable<Server>, "id" | "created_date" | "modified_date">

export type ApiV1ServiceAdminServerListCreateMutationResponse = Server
export namespace ApiV1ServiceAdminServerListCreateMutation {
  export type Response = ApiV1ServiceAdminServerListCreateMutationResponse
  export type Request = ApiV1ServiceAdminServerListCreateMutationRequest
  export type Errors = ApiV1ServiceAdminServerListCreate201
}
