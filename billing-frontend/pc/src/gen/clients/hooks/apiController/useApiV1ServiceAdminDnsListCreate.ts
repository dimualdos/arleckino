import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminDnsListCreateMutationRequest,
  ApiV1ServiceAdminDnsListCreateMutationResponse,
  ApiV1ServiceAdminDnsListCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDnsListCreateClient = typeof client<ApiV1ServiceAdminDnsListCreateMutationResponse, ApiV1ServiceAdminDnsListCreate201, ApiV1ServiceAdminDnsListCreateMutationRequest>
type ApiV1ServiceAdminDnsListCreate = {
  data: ApiV1ServiceAdminDnsListCreateMutationResponse
  error: ApiV1ServiceAdminDnsListCreate201
  request: ApiV1ServiceAdminDnsListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDnsListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDnsListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDnsListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export function useApiV1ServiceAdminDnsListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDnsListCreate["response"], ApiV1ServiceAdminDnsListCreate["error"], ApiV1ServiceAdminDnsListCreate["request"]>
    client?: ApiV1ServiceAdminDnsListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDnsListCreate["response"], ApiV1ServiceAdminDnsListCreate["error"], ApiV1ServiceAdminDnsListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDnsListCreate["response"], ApiV1ServiceAdminDnsListCreate["error"], ApiV1ServiceAdminDnsListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminDnsListCreate["data"], ApiV1ServiceAdminDnsListCreate["error"], ApiV1ServiceAdminDnsListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/admin/dns/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
