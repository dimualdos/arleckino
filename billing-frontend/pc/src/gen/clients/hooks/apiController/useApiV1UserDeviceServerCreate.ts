import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceServerCreateMutationRequest,
  ApiV1UserDeviceServerCreateMutationResponse,
  ApiV1UserDeviceServerCreatePathParams,
  ApiV1UserDeviceServerCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceServerCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceServerCreateClient = typeof client<ApiV1UserDeviceServerCreateMutationResponse, ApiV1UserDeviceServerCreate201, ApiV1UserDeviceServerCreateMutationRequest>
type ApiV1UserDeviceServerCreate = {
  data: ApiV1UserDeviceServerCreateMutationResponse
  error: ApiV1UserDeviceServerCreate201
  request: ApiV1UserDeviceServerCreateMutationRequest
  pathParams: ApiV1UserDeviceServerCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceServerCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceServerCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceServerCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export function useApiV1UserDeviceServerCreate(
  id: ApiV1UserDeviceServerCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceServerCreate["response"], ApiV1UserDeviceServerCreate["error"], ApiV1UserDeviceServerCreate["request"]>
    client?: ApiV1UserDeviceServerCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceServerCreate["response"], ApiV1UserDeviceServerCreate["error"], ApiV1UserDeviceServerCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceServerCreate["response"], ApiV1UserDeviceServerCreate["error"], ApiV1UserDeviceServerCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceServerCreate["data"], ApiV1UserDeviceServerCreate["error"], ApiV1UserDeviceServerCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/server/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
