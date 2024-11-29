import type { DomainResponse } from "../DomainResponse"

export type ApiV1ServiceAdminDomainListListQueryParams =
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

export type ApiV1ServiceAdminDomainListListQueryResponse = {
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
  results: DomainResponse[]
}
export type ApiV1ServiceAdminDomainListListQuery = {
  Response: ApiV1ServiceAdminDomainListListQueryResponse
  QueryParams: ApiV1ServiceAdminDomainListListQueryParams
}
