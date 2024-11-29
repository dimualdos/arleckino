import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationRequest,
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreate201,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsCreateClient = typeof client<
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreate201,
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationRequest
>
type ApiV1UserReferralsBalanceWithdrawalTransactionsCreate = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationResponse
  error: ApiV1UserReferralsBalanceWithdrawalTransactionsCreate201
  request: ApiV1UserReferralsBalanceWithdrawalTransactionsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_system_is_disabled**Система для вывода средств с указанным ID отключена.* **withdrawal_wallet_with_different_withdrawal_system**Указан кошелек для вывода средств для другой системы вывода средств.
 * @summary Список транзакций вывода средств, создание новой транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["response"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["error"],
      ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["request"]
    >
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["response"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["error"],
  ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["response"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["error"],
    ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["data"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["error"],
        ApiV1UserReferralsBalanceWithdrawalTransactionsCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
