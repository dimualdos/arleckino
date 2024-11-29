import type { AdminUserDevice } from "../AdminUserDevice"

export type ApiV1UserAdminUserDeviceReadPathParams = {
  /**
   * @type string
   */
  deviceId: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserDeviceReadQueryResponse = AdminUserDevice
export type ApiV1UserAdminUserDeviceReadQuery = {
  Response: ApiV1UserAdminUserDeviceReadQueryResponse
  PathParams: ApiV1UserAdminUserDeviceReadPathParams
}
