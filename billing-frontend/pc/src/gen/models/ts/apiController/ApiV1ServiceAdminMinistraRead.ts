import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceAdminMinistraReadPathParams = {
  /**
   * @description A unique integer value identifying this ministra server.
   * @type integer
   */
  id: number
}

export type ApiV1ServiceAdminMinistraReadQueryResponse = MinistraServer
export type ApiV1ServiceAdminMinistraReadQuery = {
  Response: ApiV1ServiceAdminMinistraReadQueryResponse
  PathParams: ApiV1ServiceAdminMinistraReadPathParams
}
