import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingPaymentTransactionCreateCreateMutationRequest,
  ApiV1BillingPaymentTransactionCreateCreateMutationResponse,
  ApiV1BillingPaymentTransactionCreateCreate201,
} from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionCreateCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingPaymentTransactionCreateCreateClient = typeof client<
  ApiV1BillingPaymentTransactionCreateCreateMutationResponse,
  ApiV1BillingPaymentTransactionCreateCreate201,
  ApiV1BillingPaymentTransactionCreateCreateMutationRequest
>
type ApiV1BillingPaymentTransactionCreateCreate = {
  data: ApiV1BillingPaymentTransactionCreateCreateMutationResponse
  error: ApiV1BillingPaymentTransactionCreateCreate201
  request: ApiV1BillingPaymentTransactionCreateCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentTransactionCreateCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentTransactionCreateCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentTransactionCreateCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **policy_agreement_must_be_set**Необходимо подтвердить соглашение о политике конфиденциальности.* **amount_must_be_positive**Сумма должна быть больше нуля.* **payment_system_not_found_by_id**Платежная система с указанным ID {} не обнаружена.* **user_balance_replenishment_is_disable**Пополнение баланса запрещено администратором.* **payment_system_is_disabled**Платежная система с указанным ID {} отключена администратором.* **payment_system_is_disabled_for_user**Платежная система с указанным ID {} отключена для пользователя администратором.* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Создание платежной транзакции пополнения баланса
 * @link /api/v1/billing/payment/transaction/create/ */
export function useApiV1BillingPaymentTransactionCreateCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1BillingPaymentTransactionCreateCreate["response"], ApiV1BillingPaymentTransactionCreateCreate["error"], ApiV1BillingPaymentTransactionCreateCreate["request"]>
    client?: ApiV1BillingPaymentTransactionCreateCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingPaymentTransactionCreateCreate["response"], ApiV1BillingPaymentTransactionCreateCreate["error"], ApiV1BillingPaymentTransactionCreateCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingPaymentTransactionCreateCreate["response"], ApiV1BillingPaymentTransactionCreateCreate["error"], ApiV1BillingPaymentTransactionCreateCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1BillingPaymentTransactionCreateCreate["data"], ApiV1BillingPaymentTransactionCreateCreate["error"], ApiV1BillingPaymentTransactionCreateCreate["request"]>({
        method: "post",
        url: `/api/v1/billing/payment/transaction/create/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
