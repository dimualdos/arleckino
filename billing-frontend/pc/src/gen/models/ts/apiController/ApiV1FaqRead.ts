import type { FaqDetail } from "../FaqDetail"

export type ApiV1FaqReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1FaqReadQueryResponse = FaqDetail
export type ApiV1FaqReadQuery = {
  Response: ApiV1FaqReadQueryResponse
  PathParams: ApiV1FaqReadPathParams
}
