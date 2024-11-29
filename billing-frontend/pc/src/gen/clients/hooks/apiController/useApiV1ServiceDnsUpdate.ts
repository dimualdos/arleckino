import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1ServiceDnsUpdateMutationRequest, ApiV1ServiceDnsUpdateMutationResponse, ApiV1ServiceDnsUpdatePathParams } from "../../../models/ts/apiController/ApiV1ServiceDnsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceDnsUpdateClient = typeof client<ApiV1ServiceDnsUpdateMutationResponse, never, ApiV1ServiceDnsUpdateMutationRequest>
type ApiV1ServiceDnsUpdate = {
  data: ApiV1ServiceDnsUpdateMutationResponse
  error: never
  request: ApiV1ServiceDnsUpdateMutationRequest
  pathParams: ApiV1ServiceDnsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export function useApiV1ServiceDnsUpdate(
  id: ApiV1ServiceDnsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceDnsUpdate["response"], ApiV1ServiceDnsUpdate["error"], ApiV1ServiceDnsUpdate["request"]>
    client?: ApiV1ServiceDnsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceDnsUpdate["response"], ApiV1ServiceDnsUpdate["error"], ApiV1ServiceDnsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceDnsUpdate["response"], ApiV1ServiceDnsUpdate["error"], ApiV1ServiceDnsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceDnsUpdate["data"], ApiV1ServiceDnsUpdate["error"], ApiV1ServiceDnsUpdate["request"]>({
        method: "put",
        url: `/api/v1/service/dns/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
