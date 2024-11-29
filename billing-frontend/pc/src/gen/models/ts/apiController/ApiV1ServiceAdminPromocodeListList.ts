import type { Promocode } from "../Promocode"

export type ApiV1ServiceAdminPromocodeListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      promocode_type?: string
      /**
       * @type string | undefined
       */
      is_active?: string
      /**
       * @type string | undefined
       */
      code?: string
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
      /**
       * @description The initial index from which to return the results.
       * @type integer | undefined
       */
      offset?: number
    }
  | undefined

export type ApiV1ServiceAdminPromocodeListListQueryResponse = {
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
  results: Promocode[]
}
export type ApiV1ServiceAdminPromocodeListListQuery = {
  Response: ApiV1ServiceAdminPromocodeListListQueryResponse
  QueryParams: ApiV1ServiceAdminPromocodeListListQueryParams
}
