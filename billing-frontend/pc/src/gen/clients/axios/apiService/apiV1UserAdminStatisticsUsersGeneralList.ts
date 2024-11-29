import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsUsersGeneralListQueryResponse,
  ApiV1UserAdminStatisticsUsersGeneralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersGeneralList"

/**
 * @description .
 * @summary Общие данные для секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/general */
export async function apiV1UserAdminStatisticsUsersGeneralList(
  params?: ApiV1UserAdminStatisticsUsersGeneralListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsUsersGeneralListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsUsersGeneralListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/users/general`,
    params,
    ...options,
  })
  return res
}
