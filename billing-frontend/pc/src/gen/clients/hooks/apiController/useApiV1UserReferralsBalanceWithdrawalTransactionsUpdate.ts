import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest,
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateClient = typeof client<
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse,
  never,
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest
>
type ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationResponse
  error: never
  request: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateMutationRequest
  pathParams: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **withdrawal_transaction_is_transfered**Транзакция вывода средств уже обработана.* **amount_must_be_positive**Сумма должна быть больше нуля.* **amount_should_not_exceed_balance**Сумма не должна превышать остаток на балансе.
 * @summary Просмотр, изменение и удаление транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions/:id */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsUpdate(
  id: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["response"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["error"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["request"]
    >
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["response"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["error"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["response"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["error"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["data"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["error"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsUpdate["request"]
      >({
        method: "put",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
