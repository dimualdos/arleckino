import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceDnsCreateMutationRequest,
  ApiV1UserDeviceDnsCreateMutationResponse,
  ApiV1UserDeviceDnsCreatePathParams,
  ApiV1UserDeviceDnsCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceDnsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceDnsCreateClient = typeof client<ApiV1UserDeviceDnsCreateMutationResponse, ApiV1UserDeviceDnsCreate201, ApiV1UserDeviceDnsCreateMutationRequest>
type ApiV1UserDeviceDnsCreate = {
  data: ApiV1UserDeviceDnsCreateMutationResponse
  error: ApiV1UserDeviceDnsCreate201
  request: ApiV1UserDeviceDnsCreateMutationRequest
  pathParams: ApiV1UserDeviceDnsCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceDnsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceDnsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceDnsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export function useApiV1UserDeviceDnsCreate(
  id: ApiV1UserDeviceDnsCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceDnsCreate["response"], ApiV1UserDeviceDnsCreate["error"], ApiV1UserDeviceDnsCreate["request"]>
    client?: ApiV1UserDeviceDnsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceDnsCreate["response"], ApiV1UserDeviceDnsCreate["error"], ApiV1UserDeviceDnsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceDnsCreate["response"], ApiV1UserDeviceDnsCreate["error"], ApiV1UserDeviceDnsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceDnsCreate["data"], ApiV1UserDeviceDnsCreate["error"], ApiV1UserDeviceDnsCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/dns/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
