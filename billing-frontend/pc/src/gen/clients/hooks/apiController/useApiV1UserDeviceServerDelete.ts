import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserDeviceServerDeleteMutationResponse, ApiV1UserDeviceServerDeletePathParams, ApiV1UserDeviceServerDelete204 } from "../../../models/ts/apiController/ApiV1UserDeviceServerDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceServerDeleteClient = typeof client<ApiV1UserDeviceServerDeleteMutationResponse, ApiV1UserDeviceServerDelete204, never>
type ApiV1UserDeviceServerDelete = {
  data: ApiV1UserDeviceServerDeleteMutationResponse
  error: ApiV1UserDeviceServerDelete204
  request: never
  pathParams: ApiV1UserDeviceServerDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceServerDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceServerDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceServerDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export function useApiV1UserDeviceServerDelete(
  id: ApiV1UserDeviceServerDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceServerDelete["response"], ApiV1UserDeviceServerDelete["error"], void>
    client?: ApiV1UserDeviceServerDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceServerDelete["response"], ApiV1UserDeviceServerDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceServerDelete["response"], ApiV1UserDeviceServerDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserDeviceServerDelete["data"], ApiV1UserDeviceServerDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/device/${id}/server/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
