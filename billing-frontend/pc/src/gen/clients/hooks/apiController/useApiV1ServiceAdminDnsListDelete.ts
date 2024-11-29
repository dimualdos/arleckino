import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1ServiceAdminDnsListDeleteMutationResponse, ApiV1ServiceAdminDnsListDelete204 } from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDnsListDeleteClient = typeof client<ApiV1ServiceAdminDnsListDeleteMutationResponse, ApiV1ServiceAdminDnsListDelete204, never>
type ApiV1ServiceAdminDnsListDelete = {
  data: ApiV1ServiceAdminDnsListDeleteMutationResponse
  error: ApiV1ServiceAdminDnsListDelete204
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDnsListDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDnsListDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDnsListDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export function useApiV1ServiceAdminDnsListDelete(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDnsListDelete["response"], ApiV1ServiceAdminDnsListDelete["error"], void>
    client?: ApiV1ServiceAdminDnsListDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDnsListDelete["response"], ApiV1ServiceAdminDnsListDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDnsListDelete["response"], ApiV1ServiceAdminDnsListDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminDnsListDelete["data"], ApiV1ServiceAdminDnsListDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/admin/dns/list/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
