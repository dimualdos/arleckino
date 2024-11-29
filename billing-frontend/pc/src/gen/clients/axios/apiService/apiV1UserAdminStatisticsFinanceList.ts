import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminStatisticsFinanceListQueryResponse, ApiV1UserAdminStatisticsFinanceListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminStatisticsFinanceList"

/**
 * @description .
 * @summary Данные для секции "ФИНАНСЫ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/finance */
export async function apiV1UserAdminStatisticsFinanceList(
  params?: ApiV1UserAdminStatisticsFinanceListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsFinanceListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsFinanceListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/finance`,
    params,
    ...options,
  })
  return res
}
