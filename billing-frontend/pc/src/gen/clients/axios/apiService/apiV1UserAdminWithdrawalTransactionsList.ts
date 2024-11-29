import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalTransactionsListQueryResponse,
  ApiV1UserAdminWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsList"

/**
 * @description .
 * @summary Список транзакций вывода средств пользователей
 * @link /api/v1/user/admin/withdrawal/transactions */
export async function apiV1UserAdminWithdrawalTransactionsList(
  params?: ApiV1UserAdminWithdrawalTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/withdrawal/transactions`,
    params,
    ...options,
  })
  return res
}
