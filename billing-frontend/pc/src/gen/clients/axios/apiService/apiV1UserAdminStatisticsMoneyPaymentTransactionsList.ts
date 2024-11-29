import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse,
  ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsMoneyPaymentTransactionsList"

/**
 * @description .
 * @summary Данные для показателя "Заработано за период" секции "ДЕНЬГИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/money/payment-transactions */
export async function apiV1UserAdminStatisticsMoneyPaymentTransactionsList(
  params?: ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsMoneyPaymentTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/money/payment-transactions`,
    params,
    ...options,
  })
  return res
}
