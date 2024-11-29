import type { Domain } from "../Domain"

export type ApiV1ServiceAdminDomainReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminDomainReadQueryResponse = Domain
export type ApiV1ServiceAdminDomainReadQuery = {
  Response: ApiV1ServiceAdminDomainReadQueryResponse
  PathParams: ApiV1ServiceAdminDomainReadPathParams
}
