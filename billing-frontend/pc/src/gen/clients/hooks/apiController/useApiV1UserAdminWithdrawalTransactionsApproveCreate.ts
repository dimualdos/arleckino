import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest,
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams,
  ApiV1UserAdminWithdrawalTransactionsApproveCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsApproveCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalTransactionsApproveCreateClient = typeof client<
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse,
  ApiV1UserAdminWithdrawalTransactionsApproveCreate201,
  ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest
>
type ApiV1UserAdminWithdrawalTransactionsApproveCreate = {
  data: ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationResponse
  error: ApiV1UserAdminWithdrawalTransactionsApproveCreate201
  request: ApiV1UserAdminWithdrawalTransactionsApproveCreateMutationRequest
  pathParams: ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsApproveCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalTransactionsApproveCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsApproveCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.
 * @summary Утверждение транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id/approve */
export function useApiV1UserAdminWithdrawalTransactionsApproveCreate(
  id: ApiV1UserAdminWithdrawalTransactionsApproveCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminWithdrawalTransactionsApproveCreate["response"],
      ApiV1UserAdminWithdrawalTransactionsApproveCreate["error"],
      ApiV1UserAdminWithdrawalTransactionsApproveCreate["request"]
    >
    client?: ApiV1UserAdminWithdrawalTransactionsApproveCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserAdminWithdrawalTransactionsApproveCreate["response"],
  ApiV1UserAdminWithdrawalTransactionsApproveCreate["error"],
  ApiV1UserAdminWithdrawalTransactionsApproveCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserAdminWithdrawalTransactionsApproveCreate["response"],
    ApiV1UserAdminWithdrawalTransactionsApproveCreate["error"],
    ApiV1UserAdminWithdrawalTransactionsApproveCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserAdminWithdrawalTransactionsApproveCreate["data"],
        ApiV1UserAdminWithdrawalTransactionsApproveCreate["error"],
        ApiV1UserAdminWithdrawalTransactionsApproveCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/admin/withdrawal/transactions/${id}/approve`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
