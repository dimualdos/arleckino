import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationRequest,
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateClient = typeof client<
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationResponse,
  never,
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationRequest
>
type ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationResponse
  error: never
  request: ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateMutationRequest
  pathParams: ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["response"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["error"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["request"]
    >
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["response"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["error"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["response"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["error"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["data"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["error"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
