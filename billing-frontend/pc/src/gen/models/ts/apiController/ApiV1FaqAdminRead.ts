import type { FaqDetail } from "../FaqDetail"

export type ApiV1FaqAdminReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1FaqAdminReadQueryResponse = FaqDetail
export type ApiV1FaqAdminReadQuery = {
  Response: ApiV1FaqAdminReadQueryResponse
  PathParams: ApiV1FaqAdminReadPathParams
}
