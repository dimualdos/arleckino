import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest,
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse,
  ApiV1BillingAdminPaymentTransactionCreateCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionCreateCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentTransactionCreateCreateClient = typeof client<
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse,
  ApiV1BillingAdminPaymentTransactionCreateCreate201,
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest
>
type ApiV1BillingAdminPaymentTransactionCreateCreate = {
  data: ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse
  error: ApiV1BillingAdminPaymentTransactionCreateCreate201
  request: ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionCreateCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentTransactionCreateCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionCreateCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **amount_must_be_positive**Сумма должна быть больше нуля.
 * @summary Создание платежной транзакции пополнения баланса для пользователя
 * @link /api/v1/billing/admin/payment/transaction/create/ */
export function useApiV1BillingAdminPaymentTransactionCreateCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiV1BillingAdminPaymentTransactionCreateCreate["response"],
      ApiV1BillingAdminPaymentTransactionCreateCreate["error"],
      ApiV1BillingAdminPaymentTransactionCreateCreate["request"]
    >
    client?: ApiV1BillingAdminPaymentTransactionCreateCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1BillingAdminPaymentTransactionCreateCreate["response"],
  ApiV1BillingAdminPaymentTransactionCreateCreate["error"],
  ApiV1BillingAdminPaymentTransactionCreateCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentTransactionCreateCreate["response"], ApiV1BillingAdminPaymentTransactionCreateCreate["error"], ApiV1BillingAdminPaymentTransactionCreateCreate["request"]>(
    {
      mutationFn: async (data) => {
        const res = await client<
          ApiV1BillingAdminPaymentTransactionCreateCreate["data"],
          ApiV1BillingAdminPaymentTransactionCreateCreate["error"],
          ApiV1BillingAdminPaymentTransactionCreateCreate["request"]
        >({
          method: "post",
          url: `/api/v1/billing/admin/payment/transaction/create/`,
          data,
          ...clientOptions,
        })
        return res
      },
      ...mutationOptions,
    },
  )
}
