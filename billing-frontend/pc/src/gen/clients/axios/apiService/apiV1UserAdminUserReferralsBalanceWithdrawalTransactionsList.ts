import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse,
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams,
  ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList"

/**
 * @description .
 * @summary Список транзакций вывода средств пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions */
export async function apiV1UserAdminUserReferralsBalanceWithdrawalTransactionsList(
  { id }: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListPathParams,
  params?: ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReferralsBalanceWithdrawalTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/referrals/balance/withdrawal-transactions`,
    params,
    ...options,
  })
  return res
}
