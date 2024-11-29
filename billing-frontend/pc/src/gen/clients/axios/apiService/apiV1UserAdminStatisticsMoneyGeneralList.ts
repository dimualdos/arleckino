import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse,
  ApiV1UserAdminStatisticsMoneyGeneralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyGeneralList"

/**
 * @description .
 * @summary Общие данные для секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/general */
export async function apiV1UserAdminStatisticsMoneyGeneralList(
  params?: ApiV1UserAdminStatisticsMoneyGeneralListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsMoneyGeneralListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/money/general`,
    params,
    ...options,
  })
  return res
}
