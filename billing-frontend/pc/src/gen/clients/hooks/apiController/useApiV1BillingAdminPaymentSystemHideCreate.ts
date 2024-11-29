import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemHideCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemHideCreatePathParams,
  ApiV1BillingAdminPaymentSystemHideCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemHideCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemHideCreateClient = typeof client<ApiV1BillingAdminPaymentSystemHideCreateMutationResponse, ApiV1BillingAdminPaymentSystemHideCreate201, never>
type ApiV1BillingAdminPaymentSystemHideCreate = {
  data: ApiV1BillingAdminPaymentSystemHideCreateMutationResponse
  error: ApiV1BillingAdminPaymentSystemHideCreate201
  request: never
  pathParams: ApiV1BillingAdminPaymentSystemHideCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemHideCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemHideCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemHideCreateClient>>
  }
}
/**
 * @description При скрытии все пользователи, зарегистрированные после даты скрытия, не смогут использовать эту ПС.Список сообщений **message_type**:* **payment_system_is_hidden**Флаг скрытия для платежной системы с указанным ID {} уже установлен.
 * @summary Скрыть платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/hide/ */
export function useApiV1BillingAdminPaymentSystemHideCreate(
  id: ApiV1BillingAdminPaymentSystemHideCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemHideCreate["response"], ApiV1BillingAdminPaymentSystemHideCreate["error"], void>
    client?: ApiV1BillingAdminPaymentSystemHideCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemHideCreate["response"], ApiV1BillingAdminPaymentSystemHideCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemHideCreate["response"], ApiV1BillingAdminPaymentSystemHideCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemHideCreate["data"], ApiV1BillingAdminPaymentSystemHideCreate["error"], void>({
        method: "post",
        url: `/api/v1/billing/admin/payment/system/${id}/hide/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
