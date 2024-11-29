import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminStatisticsUsersAllListQueryResponse, ApiV1UserAdminStatisticsUsersAllListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersAllList"

/**
 * @description .
 * @summary Данные для показателя "Всего пользователей" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/all */
export async function apiV1UserAdminStatisticsUsersAllList(
  params?: ApiV1UserAdminStatisticsUsersAllListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsUsersAllListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsUsersAllListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/users/all`,
    params,
    ...options,
  })
  return res
}
