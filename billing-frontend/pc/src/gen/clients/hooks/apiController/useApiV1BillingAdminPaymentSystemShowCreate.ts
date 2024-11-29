import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemShowCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemShowCreatePathParams,
  ApiV1BillingAdminPaymentSystemShowCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemShowCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemShowCreateClient = typeof client<ApiV1BillingAdminPaymentSystemShowCreateMutationResponse, ApiV1BillingAdminPaymentSystemShowCreate201, never>
type ApiV1BillingAdminPaymentSystemShowCreate = {
  data: ApiV1BillingAdminPaymentSystemShowCreateMutationResponse
  error: ApiV1BillingAdminPaymentSystemShowCreate201
  request: never
  pathParams: ApiV1BillingAdminPaymentSystemShowCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemShowCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemShowCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemShowCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **payment_system_is_not_hidden**Флаг скрытия для платежной системы с указанным ID {} уже снят.
 * @summary Показать платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/show/ */
export function useApiV1BillingAdminPaymentSystemShowCreate(
  id: ApiV1BillingAdminPaymentSystemShowCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemShowCreate["response"], ApiV1BillingAdminPaymentSystemShowCreate["error"], void>
    client?: ApiV1BillingAdminPaymentSystemShowCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemShowCreate["response"], ApiV1BillingAdminPaymentSystemShowCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemShowCreate["response"], ApiV1BillingAdminPaymentSystemShowCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemShowCreate["data"], ApiV1BillingAdminPaymentSystemShowCreate["error"], void>({
        method: "post",
        url: `/api/v1/billing/admin/payment/system/${id}/show/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
