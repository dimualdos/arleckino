import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1ServiceDnsDeleteMutationResponse, ApiV1ServiceDnsDeletePathParams, ApiV1ServiceDnsDelete204 } from "../../../models/ts/apiController/ApiV1ServiceDnsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceDnsDeleteClient = typeof client<ApiV1ServiceDnsDeleteMutationResponse, ApiV1ServiceDnsDelete204, never>
type ApiV1ServiceDnsDelete = {
  data: ApiV1ServiceDnsDeleteMutationResponse
  error: ApiV1ServiceDnsDelete204
  request: never
  pathParams: ApiV1ServiceDnsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsDeleteClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export function useApiV1ServiceDnsDelete(
  id: ApiV1ServiceDnsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceDnsDelete["response"], ApiV1ServiceDnsDelete["error"], void>
    client?: ApiV1ServiceDnsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceDnsDelete["response"], ApiV1ServiceDnsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceDnsDelete["response"], ApiV1ServiceDnsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceDnsDelete["data"], ApiV1ServiceDnsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/dns/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
