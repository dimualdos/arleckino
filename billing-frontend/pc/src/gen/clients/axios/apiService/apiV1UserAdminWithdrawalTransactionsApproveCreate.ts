import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest,
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsApproveCreate"

/**
 * @description Список сообщений **message_type**:* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.
 * @summary Утверждение транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id/approve */
export async function apiV1UserAdminWithdrawalTransactionsApproveCreate(
  { id }: ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams,
  data?: ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse, ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/withdrawal/transactions/${id}/approve`,
    data,
    ...options,
  })
  return res
}
