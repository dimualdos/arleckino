import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest,
  ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse,
  ApiV1BillingAdminPaymentSystemPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemPartialUpdateClient = typeof client<ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse, never, ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest>
type ApiV1BillingAdminPaymentSystemPartialUpdate = {
  data: ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse
  error: never
  request: ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest
  pathParams: ApiV1BillingAdminPaymentSystemPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export function useApiV1BillingAdminPaymentSystemPartialUpdate(
  id: ApiV1BillingAdminPaymentSystemPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1BillingAdminPaymentSystemPartialUpdate["response"], ApiV1BillingAdminPaymentSystemPartialUpdate["error"], ApiV1BillingAdminPaymentSystemPartialUpdate["request"]>
    client?: ApiV1BillingAdminPaymentSystemPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1BillingAdminPaymentSystemPartialUpdate["response"], ApiV1BillingAdminPaymentSystemPartialUpdate["error"], ApiV1BillingAdminPaymentSystemPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1BillingAdminPaymentSystemPartialUpdate["response"], ApiV1BillingAdminPaymentSystemPartialUpdate["error"], ApiV1BillingAdminPaymentSystemPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1BillingAdminPaymentSystemPartialUpdate["data"], ApiV1BillingAdminPaymentSystemPartialUpdate["error"], ApiV1BillingAdminPaymentSystemPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/billing/admin/payment/system/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
