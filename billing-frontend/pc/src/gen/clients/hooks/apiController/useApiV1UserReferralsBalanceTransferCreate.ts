import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceTransferCreateMutationRequest,
  ApiV1UserReferralsBalanceTransferCreateMutationResponse,
  ApiV1UserReferralsBalanceTransferCreate201,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceTransferCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceTransferCreateClient = typeof client<
  ApiV1UserReferralsBalanceTransferCreateMutationResponse,
  ApiV1UserReferralsBalanceTransferCreate201,
  ApiV1UserReferralsBalanceTransferCreateMutationRequest
>
type ApiV1UserReferralsBalanceTransferCreate = {
  data: ApiV1UserReferralsBalanceTransferCreateMutationResponse
  error: ApiV1UserReferralsBalanceTransferCreate201
  request: ApiV1UserReferralsBalanceTransferCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceTransferCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceTransferCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceTransferCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.
 * @summary Перевод реферального дохода на текущий баланс пользователя
 * @link /api/v1/user/referrals/balance-transfer */
export function useApiV1UserReferralsBalanceTransferCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserReferralsBalanceTransferCreate["response"], ApiV1UserReferralsBalanceTransferCreate["error"], ApiV1UserReferralsBalanceTransferCreate["request"]>
    client?: ApiV1UserReferralsBalanceTransferCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserReferralsBalanceTransferCreate["response"], ApiV1UserReferralsBalanceTransferCreate["error"], ApiV1UserReferralsBalanceTransferCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserReferralsBalanceTransferCreate["response"], ApiV1UserReferralsBalanceTransferCreate["error"], ApiV1UserReferralsBalanceTransferCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserReferralsBalanceTransferCreate["data"], ApiV1UserReferralsBalanceTransferCreate["error"], ApiV1UserReferralsBalanceTransferCreate["request"]>({
        method: "post",
        url: `/api/v1/user/referrals/balance-transfer`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
