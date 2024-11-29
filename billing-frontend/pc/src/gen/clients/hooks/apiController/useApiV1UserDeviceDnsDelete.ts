import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserDeviceDnsDeleteMutationResponse, ApiV1UserDeviceDnsDeletePathParams, ApiV1UserDeviceDnsDelete204 } from "../../../models/ts/apiController/ApiV1UserDeviceDnsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceDnsDeleteClient = typeof client<ApiV1UserDeviceDnsDeleteMutationResponse, ApiV1UserDeviceDnsDelete204, never>
type ApiV1UserDeviceDnsDelete = {
  data: ApiV1UserDeviceDnsDeleteMutationResponse
  error: ApiV1UserDeviceDnsDelete204
  request: never
  pathParams: ApiV1UserDeviceDnsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceDnsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceDnsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceDnsDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export function useApiV1UserDeviceDnsDelete(
  id: ApiV1UserDeviceDnsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceDnsDelete["response"], ApiV1UserDeviceDnsDelete["error"], void>
    client?: ApiV1UserDeviceDnsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceDnsDelete["response"], ApiV1UserDeviceDnsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceDnsDelete["response"], ApiV1UserDeviceDnsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserDeviceDnsDelete["data"], ApiV1UserDeviceDnsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/device/${id}/dns/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
