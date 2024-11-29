import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest,
  ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemCreateCreate201,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemCreateCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemCreateCreateClient = typeof client<
  ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemCreateCreate201,
  ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest
>
type ApiV1BillingAdminPaymentSystemCreateCreate = {
  data: ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse
  error: ApiV1BillingAdminPaymentSystemCreateCreate201
  request: ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemCreateCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemCreateCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemCreateCreateClient>>
  }
}
/**
 * @description .
 * @summary Создание платежной системы
 * @link /api/v1/billing/admin/payment/system/create/ */
export function useApiV1BillingAdminPaymentSystemCreateCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemCreateCreate["response"], ApiV1BillingAdminPaymentSystemCreateCreate["error"], ApiV1BillingAdminPaymentSystemCreateCreate["request"]>
    client?: ApiV1BillingAdminPaymentSystemCreateCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemCreateCreate["response"], ApiV1BillingAdminPaymentSystemCreateCreate["error"], ApiV1BillingAdminPaymentSystemCreateCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemCreateCreate["response"], ApiV1BillingAdminPaymentSystemCreateCreate["error"], ApiV1BillingAdminPaymentSystemCreateCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1BillingAdminPaymentSystemCreateCreate["data"], ApiV1BillingAdminPaymentSystemCreateCreate["error"], ApiV1BillingAdminPaymentSystemCreateCreate["request"]>({
        method: "post",
        url: `/api/v1/billing/admin/payment/system/create/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
