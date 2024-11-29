import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminDomainListCreateMutationRequest,
  ApiV1ServiceAdminDomainListCreateMutationResponse,
  ApiV1ServiceAdminDomainListCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainListCreateClient = typeof client<ApiV1ServiceAdminDomainListCreateMutationResponse, ApiV1ServiceAdminDomainListCreate201, ApiV1ServiceAdminDomainListCreateMutationRequest>
type ApiV1ServiceAdminDomainListCreate = {
  data: ApiV1ServiceAdminDomainListCreateMutationResponse
  error: ApiV1ServiceAdminDomainListCreate201
  request: ApiV1ServiceAdminDomainListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainListCreateClient>>
  }
}
/**
 * @description Список доменов, создание нового домена
 * @link /api/v1/service/admin/domain/list/ */
export function useApiV1ServiceAdminDomainListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDomainListCreate["response"], ApiV1ServiceAdminDomainListCreate["error"], ApiV1ServiceAdminDomainListCreate["request"]>
    client?: ApiV1ServiceAdminDomainListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDomainListCreate["response"], ApiV1ServiceAdminDomainListCreate["error"], ApiV1ServiceAdminDomainListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDomainListCreate["response"], ApiV1ServiceAdminDomainListCreate["error"], ApiV1ServiceAdminDomainListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminDomainListCreate["data"], ApiV1ServiceAdminDomainListCreate["error"], ApiV1ServiceAdminDomainListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/admin/domain/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
