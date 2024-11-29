import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceDnsPartialUpdateMutationRequest,
  ApiV1ServiceDnsPartialUpdateMutationResponse,
  ApiV1ServiceDnsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceDnsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceDnsPartialUpdateClient = typeof client<ApiV1ServiceDnsPartialUpdateMutationResponse, never, ApiV1ServiceDnsPartialUpdateMutationRequest>
type ApiV1ServiceDnsPartialUpdate = {
  data: ApiV1ServiceDnsPartialUpdateMutationResponse
  error: never
  request: ApiV1ServiceDnsPartialUpdateMutationRequest
  pathParams: ApiV1ServiceDnsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export function useApiV1ServiceDnsPartialUpdate(
  id: ApiV1ServiceDnsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceDnsPartialUpdate["response"], ApiV1ServiceDnsPartialUpdate["error"], ApiV1ServiceDnsPartialUpdate["request"]>
    client?: ApiV1ServiceDnsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceDnsPartialUpdate["response"], ApiV1ServiceDnsPartialUpdate["error"], ApiV1ServiceDnsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceDnsPartialUpdate["response"], ApiV1ServiceDnsPartialUpdate["error"], ApiV1ServiceDnsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceDnsPartialUpdate["data"], ApiV1ServiceDnsPartialUpdate["error"], ApiV1ServiceDnsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/service/dns/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
