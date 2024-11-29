import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsUsersDevicesListQueryResponse,
  ApiV1UserAdminStatisticsUsersDevicesListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersDevicesList"

/**
 * @description .
 * @summary Данные для показателя "Устройств с подпиской" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/devices */
export async function apiV1UserAdminStatisticsUsersDevicesList(
  params?: ApiV1UserAdminStatisticsUsersDevicesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsUsersDevicesListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsUsersDevicesListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/users/devices`,
    params,
    ...options,
  })
  return res
}
