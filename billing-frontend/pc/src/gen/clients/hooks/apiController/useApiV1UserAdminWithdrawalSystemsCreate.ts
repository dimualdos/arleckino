import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalSystemsCreateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsCreateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsCreateClient = typeof client<
  ApiV1UserAdminWithdrawalSystemsCreateMutationResponse,
  ApiV1UserAdminWithdrawalSystemsCreate201,
  ApiV1UserAdminWithdrawalSystemsCreateMutationRequest
>
type ApiV1UserAdminWithdrawalSystemsCreate = {
  data: ApiV1UserAdminWithdrawalSystemsCreateMutationResponse
  error: ApiV1UserAdminWithdrawalSystemsCreate201
  request: ApiV1UserAdminWithdrawalSystemsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsCreateClient>>
  }
}
/**
 * @description .
 * @summary Список систем для вывода средств, создание новой системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems */
export function useApiV1UserAdminWithdrawalSystemsCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminWithdrawalSystemsCreate["response"], ApiV1UserAdminWithdrawalSystemsCreate["error"], ApiV1UserAdminWithdrawalSystemsCreate["request"]>
    client?: ApiV1UserAdminWithdrawalSystemsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminWithdrawalSystemsCreate["response"], ApiV1UserAdminWithdrawalSystemsCreate["error"], ApiV1UserAdminWithdrawalSystemsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminWithdrawalSystemsCreate["response"], ApiV1UserAdminWithdrawalSystemsCreate["error"], ApiV1UserAdminWithdrawalSystemsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsCreate["data"], ApiV1UserAdminWithdrawalSystemsCreate["error"], ApiV1UserAdminWithdrawalSystemsCreate["request"]>({
        method: "post",
        url: `/api/v1/user/admin/withdrawal/systems`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
