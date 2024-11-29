import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1ServiceDnsListCreateMutationRequest, ApiV1ServiceDnsListCreateMutationResponse, ApiV1ServiceDnsListCreate201 } from "../../../models/ts/apiController/ApiV1ServiceDnsListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceDnsListCreateClient = typeof client<ApiV1ServiceDnsListCreateMutationResponse, ApiV1ServiceDnsListCreate201, ApiV1ServiceDnsListCreateMutationRequest>
type ApiV1ServiceDnsListCreate = {
  data: ApiV1ServiceDnsListCreateMutationResponse
  error: ApiV1ServiceDnsListCreate201
  request: ApiV1ServiceDnsListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.* **dns_contains_russian_letters**Имя {} содержит русские буквы.
 * @summary Список ДНС, создание нового ДНС
 * @link /api/v1/service/dns/list/ */
export function useApiV1ServiceDnsListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceDnsListCreate["response"], ApiV1ServiceDnsListCreate["error"], ApiV1ServiceDnsListCreate["request"]>
    client?: ApiV1ServiceDnsListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceDnsListCreate["response"], ApiV1ServiceDnsListCreate["error"], ApiV1ServiceDnsListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceDnsListCreate["response"], ApiV1ServiceDnsListCreate["error"], ApiV1ServiceDnsListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceDnsListCreate["data"], ApiV1ServiceDnsListCreate["error"], ApiV1ServiceDnsListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/dns/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
