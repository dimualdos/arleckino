import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalTransactionsReadQueryResponse,
  ApiV1UserAdminWithdrawalTransactionsReadPathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsRead"

/**
 * @description .
 * @summary Просмотр данных транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id */
export async function apiV1UserAdminWithdrawalTransactionsRead(
  { id }: ApiV1UserAdminWithdrawalTransactionsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalTransactionsReadQueryResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalTransactionsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/withdrawal/transactions/${id}`,
    ...options,
  })
  return res
}
