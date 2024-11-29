import type { NewsDetail } from "../NewsDetail"

export type ApiV1NewsAdminReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1NewsAdminReadQueryResponse = NewsDetail
export type ApiV1NewsAdminReadQuery = {
  Response: ApiV1NewsAdminReadQueryResponse
  PathParams: ApiV1NewsAdminReadPathParams
}
