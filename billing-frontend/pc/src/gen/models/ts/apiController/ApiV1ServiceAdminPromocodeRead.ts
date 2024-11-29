import type { Promocode } from "../Promocode"

export type ApiV1ServiceAdminPromocodeReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminPromocodeReadQueryResponse = Promocode
export type ApiV1ServiceAdminPromocodeReadQuery = {
  Response: ApiV1ServiceAdminPromocodeReadQueryResponse
  PathParams: ApiV1ServiceAdminPromocodeReadPathParams
}
