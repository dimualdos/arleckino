import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockReadPathParams = {
  /**
   * @type string
   */
  block_pk: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockReadQueryResponse = AdminUserBlock
export type ApiV1UserAdminUserBlockReadQuery = {
  Response: ApiV1UserAdminUserBlockReadQueryResponse
  PathParams: ApiV1UserAdminUserBlockReadPathParams
}
