import type { Device } from "../Device"

export type ApiV1UserDeviceListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      search?: string
      /**
       * @type string | undefined
       */
      subscription_type?: string
      /**
       * @type string | undefined
       */
      server_id?: string
      /**
       * @type string | undefined
       */
      selected?: string
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

export type ApiV1UserDeviceListListQueryResponse = {
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
  results: Device[]
}
export type ApiV1UserDeviceListListQuery = {
  Response: ApiV1UserDeviceListListQueryResponse
  QueryParams: ApiV1UserDeviceListListQueryParams
}
