import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest,
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsRejectCreate"

/**
 * @description Список сообщений **message_type**:* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.
 * @summary Отклонение транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id/reject */
export async function apiV1UserAdminWithdrawalTransactionsRejectCreate(
  { id }: ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams,
  data: ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse, ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/withdrawal/transactions/${id}/reject`,
    data,
    ...options,
  })
  return res
}
