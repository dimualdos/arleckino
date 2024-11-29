import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemEnableCreatePathParams,
  ApiV1BillingAdminPaymentSystemEnableCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemEnableCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemEnableCreateClient = typeof client<ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse, ApiV1BillingAdminPaymentSystemEnableCreate201, never>
type ApiV1BillingAdminPaymentSystemEnableCreate = {
  data: ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse
  error: ApiV1BillingAdminPaymentSystemEnableCreate201
  request: never
  pathParams: ApiV1BillingAdminPaymentSystemEnableCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemEnableCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemEnableCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemEnableCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **payment_system_is_enabled**Флаг активности для платежной системы с указанным ID {} уже установлен.
 * @summary Включить платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/enable/ */
export function useApiV1BillingAdminPaymentSystemEnableCreate(
  id: ApiV1BillingAdminPaymentSystemEnableCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemEnableCreate["response"], ApiV1BillingAdminPaymentSystemEnableCreate["error"], void>
    client?: ApiV1BillingAdminPaymentSystemEnableCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemEnableCreate["response"], ApiV1BillingAdminPaymentSystemEnableCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemEnableCreate["response"], ApiV1BillingAdminPaymentSystemEnableCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemEnableCreate["data"], ApiV1BillingAdminPaymentSystemEnableCreate["error"], void>({
        method: "post",
        url: `/api/v1/billing/admin/payment/system/${id}/enable/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
