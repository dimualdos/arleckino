import type { NewsDetail } from "../NewsDetail"

export type ApiV1NewsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1NewsReadQueryResponse = NewsDetail
export type ApiV1NewsReadQuery = {
  Response: ApiV1NewsReadQueryResponse
  PathParams: ApiV1NewsReadPathParams
}
