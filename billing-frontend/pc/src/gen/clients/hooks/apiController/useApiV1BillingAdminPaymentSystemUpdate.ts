import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemUpdateMutationRequest,
  ApiV1BillingAdminPaymentSystemUpdateMutationResponse,
  ApiV1BillingAdminPaymentSystemUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemUpdateClient = typeof client<ApiV1BillingAdminPaymentSystemUpdateMutationResponse, never, ApiV1BillingAdminPaymentSystemUpdateMutationRequest>
type ApiV1BillingAdminPaymentSystemUpdate = {
  data: ApiV1BillingAdminPaymentSystemUpdateMutationResponse
  error: never
  request: ApiV1BillingAdminPaymentSystemUpdateMutationRequest
  pathParams: ApiV1BillingAdminPaymentSystemUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemUpdateClient>>
  }
}
/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export function useApiV1BillingAdminPaymentSystemUpdate(
  id: ApiV1BillingAdminPaymentSystemUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemUpdate["response"], ApiV1BillingAdminPaymentSystemUpdate["error"], ApiV1BillingAdminPaymentSystemUpdate["request"]>
    client?: ApiV1BillingAdminPaymentSystemUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemUpdate["response"], ApiV1BillingAdminPaymentSystemUpdate["error"], ApiV1BillingAdminPaymentSystemUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemUpdate["response"], ApiV1BillingAdminPaymentSystemUpdate["error"], ApiV1BillingAdminPaymentSystemUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1BillingAdminPaymentSystemUpdate["data"], ApiV1BillingAdminPaymentSystemUpdate["error"], ApiV1BillingAdminPaymentSystemUpdate["request"]>({
        method: "put",
        url: `/api/v1/billing/admin/payment/system/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
