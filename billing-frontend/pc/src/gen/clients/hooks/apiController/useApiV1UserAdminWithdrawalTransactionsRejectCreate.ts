import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest,
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams,
  ApiV1UserAdminWithdrawalTransactionsRejectCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsRejectCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalTransactionsRejectCreateClient = typeof client<
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsRejectCreate201,
  ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest
>
type ApiV1UserAdminWithdrawalTransactionsRejectCreate = {
  data: ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationResponse
  error: ApiV1UserAdminWithdrawalTransactionsRejectCreate201
  request: ApiV1UserAdminWithdrawalTransactionsRejectCreateMutationRequest
  pathParams: ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsRejectCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalTransactionsRejectCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsRejectCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.
 * @summary Отклонение транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id/reject */
export function useApiV1UserAdminWithdrawalTransactionsRejectCreate(
  id: ApiV1UserAdminWithdrawalTransactionsRejectCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminWithdrawalTransactionsRejectCreate["response"],
      ApiV1UserAdminWithdrawalTransactionsRejectCreate["error"],
      ApiV1UserAdminWithdrawalTransactionsRejectCreate["request"]
    >
    client?: ApiV1UserAdminWithdrawalTransactionsRejectCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserAdminWithdrawalTransactionsRejectCreate["response"],
  ApiV1UserAdminWithdrawalTransactionsRejectCreate["error"],
  ApiV1UserAdminWithdrawalTransactionsRejectCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserAdminWithdrawalTransactionsRejectCreate["response"],
    ApiV1UserAdminWithdrawalTransactionsRejectCreate["error"],
    ApiV1UserAdminWithdrawalTransactionsRejectCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserAdminWithdrawalTransactionsRejectCreate["data"],
        ApiV1UserAdminWithdrawalTransactionsRejectCreate["error"],
        ApiV1UserAdminWithdrawalTransactionsRejectCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/admin/withdrawal/transactions/${id}/reject`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
