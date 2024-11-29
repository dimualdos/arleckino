import type { Domain } from "../Domain"

export type ApiV1ServiceDomainListListQueryParams =
  | {
      /**
       * @description A page number within the paginated result set.
       * @type integer | undefined
       */
      page?: number
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
    }
  | undefined

export type ApiV1ServiceDomainListListQueryResponse = {
  /**
   * @type integer
   */
  count: number
  /**
   * @type string,null | undefined uri
   */
  next?: string | null
  /**
   * @type string,null | undefined uri
   */
  previous?: string | null
  /**
   * @type array
   */
  results: Domain[]
}
export type ApiV1ServiceDomainListListQuery = {
  Response: ApiV1ServiceDomainListListQueryResponse
  QueryParams: ApiV1ServiceDomainListListQueryParams
}
