import type { Server } from "../Server"

export type ApiV1ServiceAdminServerReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminServerReadQueryResponse = Server
export type ApiV1ServiceAdminServerReadQuery = {
  Response: ApiV1ServiceAdminServerReadQueryResponse
  PathParams: ApiV1ServiceAdminServerReadPathParams
}
