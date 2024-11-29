import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsPartialUpdateClient = typeof client<
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse,
  never,
  ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest
>
type ApiV1UserAdminWithdrawalSystemsPartialUpdate = {
  data: ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse
  error: never
  request: ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest
  pathParams: ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export function useApiV1UserAdminWithdrawalSystemsPartialUpdate(
  id: ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminWithdrawalSystemsPartialUpdate["response"],
      ApiV1UserAdminWithdrawalSystemsPartialUpdate["error"],
      ApiV1UserAdminWithdrawalSystemsPartialUpdate["request"]
    >
    client?: ApiV1UserAdminWithdrawalSystemsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminWithdrawalSystemsPartialUpdate["response"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["error"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminWithdrawalSystemsPartialUpdate["response"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["error"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsPartialUpdate["data"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["error"], ApiV1UserAdminWithdrawalSystemsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/admin/withdrawal/systems/${id}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
