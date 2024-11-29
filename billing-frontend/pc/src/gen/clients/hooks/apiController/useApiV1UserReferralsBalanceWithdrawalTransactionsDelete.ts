import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsDeletePathParams,
  ApiV1UserReferralsBalanceWithdrawalTransactionsDelete204,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteClient = typeof client<
  ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsDelete204,
  never
>
type ApiV1UserReferralsBalanceWithdrawalTransactionsDelete = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteMutationResponse
  error: ApiV1UserReferralsBalanceWithdrawalTransactionsDelete204
  request: never
  pathParams: ApiV1UserReferralsBalanceWithdrawalTransactionsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsDelete(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["error"], void>
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
