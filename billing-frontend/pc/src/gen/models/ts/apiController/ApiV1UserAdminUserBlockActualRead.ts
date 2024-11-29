import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockActualReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockActualReadQueryResponse = AdminUserBlock
export type ApiV1UserAdminUserBlockActualReadQuery = {
  Response: ApiV1UserAdminUserBlockActualReadQueryResponse
  PathParams: ApiV1UserAdminUserBlockActualReadPathParams
}
