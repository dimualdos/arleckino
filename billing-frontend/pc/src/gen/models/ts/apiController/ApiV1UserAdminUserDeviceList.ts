import type { AdminUserDevice } from "../AdminUserDevice"

export type ApiV1UserAdminUserDeviceListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceListQueryParams =
  | {
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

export type ApiV1UserAdminUserDeviceListQueryResponse = {
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
  results: AdminUserDevice[]
}
export type ApiV1UserAdminUserDeviceListQuery = {
  Response: ApiV1UserAdminUserDeviceListQueryResponse
  PathParams: ApiV1UserAdminUserDeviceListPathParams
  QueryParams: ApiV1UserAdminUserDeviceListQueryParams
}
