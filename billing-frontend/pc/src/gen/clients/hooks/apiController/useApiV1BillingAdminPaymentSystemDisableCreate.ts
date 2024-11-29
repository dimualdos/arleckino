import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemDisableCreatePathParams,
  ApiV1BillingAdminPaymentSystemDisableCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemDisableCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemDisableCreateClient = typeof client<ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse, ApiV1BillingAdminPaymentSystemDisableCreate201, never>
type ApiV1BillingAdminPaymentSystemDisableCreate = {
  data: ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse
  error: ApiV1BillingAdminPaymentSystemDisableCreate201
  request: never
  pathParams: ApiV1BillingAdminPaymentSystemDisableCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemDisableCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemDisableCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemDisableCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **payment_system_is_disabled**Флаг активности для платежной системы с указанным ID {} уже снят.
 * @summary Отключить платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/disable/ */
export function useApiV1BillingAdminPaymentSystemDisableCreate(
  id: ApiV1BillingAdminPaymentSystemDisableCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemDisableCreate["response"], ApiV1BillingAdminPaymentSystemDisableCreate["error"], void>
    client?: ApiV1BillingAdminPaymentSystemDisableCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemDisableCreate["response"], ApiV1BillingAdminPaymentSystemDisableCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemDisableCreate["response"], ApiV1BillingAdminPaymentSystemDisableCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemDisableCreate["data"], ApiV1BillingAdminPaymentSystemDisableCreate["error"], void>({
        method: "post",
        url: `/api/v1/billing/admin/payment/system/${id}/disable/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
