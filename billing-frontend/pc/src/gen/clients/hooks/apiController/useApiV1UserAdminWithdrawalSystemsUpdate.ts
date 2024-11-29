import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsUpdateClient = typeof client<ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse, never, ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest>
type ApiV1UserAdminWithdrawalSystemsUpdate = {
  data: ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse
  error: never
  request: ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest
  pathParams: ApiV1UserAdminWithdrawalSystemsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export function useApiV1UserAdminWithdrawalSystemsUpdate(
  id: ApiV1UserAdminWithdrawalSystemsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminWithdrawalSystemsUpdate["response"], ApiV1UserAdminWithdrawalSystemsUpdate["error"], ApiV1UserAdminWithdrawalSystemsUpdate["request"]>
    client?: ApiV1UserAdminWithdrawalSystemsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminWithdrawalSystemsUpdate["response"], ApiV1UserAdminWithdrawalSystemsUpdate["error"], ApiV1UserAdminWithdrawalSystemsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminWithdrawalSystemsUpdate["response"], ApiV1UserAdminWithdrawalSystemsUpdate["error"], ApiV1UserAdminWithdrawalSystemsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsUpdate["data"], ApiV1UserAdminWithdrawalSystemsUpdate["error"], ApiV1UserAdminWithdrawalSystemsUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/admin/withdrawal/systems/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
