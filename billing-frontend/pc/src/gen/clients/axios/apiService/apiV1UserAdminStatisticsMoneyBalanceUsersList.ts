import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse,
  ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyBalanceUsersList"

/**
 * @description .
 * @summary Данные для показателя "Баланс всех пользователей" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/balance-users */
export async function apiV1UserAdminStatisticsMoneyBalanceUsersList(
  params?: ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsMoneyBalanceUsersListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/money/balance-users`,
    params,
    ...options,
  })
  return res
}
