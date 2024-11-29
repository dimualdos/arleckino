import type { AdminUser } from "../AdminUser"

export type ApiV1UserAdminUserReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReadQueryResponse = AdminUser
export type ApiV1UserAdminUserReadQuery = {
  Response: ApiV1UserAdminUserReadQueryResponse
  PathParams: ApiV1UserAdminUserReadPathParams
}
