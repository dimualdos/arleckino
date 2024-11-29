import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse,
  ApiV1UserAdminWithdrawalSystemsDeletePathParams,
  ApiV1UserAdminWithdrawalSystemsDelete204,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsDeleteClient = typeof client<ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse, ApiV1UserAdminWithdrawalSystemsDelete204, never>
type ApiV1UserAdminWithdrawalSystemsDelete = {
  data: ApiV1UserAdminWithdrawalSystemsDeleteMutationResponse
  error: ApiV1UserAdminWithdrawalSystemsDelete204
  request: never
  pathParams: ApiV1UserAdminWithdrawalSystemsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsDeleteClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export function useApiV1UserAdminWithdrawalSystemsDelete(
  id: ApiV1UserAdminWithdrawalSystemsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminWithdrawalSystemsDelete["response"], ApiV1UserAdminWithdrawalSystemsDelete["error"], void>
    client?: ApiV1UserAdminWithdrawalSystemsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminWithdrawalSystemsDelete["response"], ApiV1UserAdminWithdrawalSystemsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminWithdrawalSystemsDelete["response"], ApiV1UserAdminWithdrawalSystemsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsDelete["data"], ApiV1UserAdminWithdrawalSystemsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/admin/withdrawal/systems/${id}`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
