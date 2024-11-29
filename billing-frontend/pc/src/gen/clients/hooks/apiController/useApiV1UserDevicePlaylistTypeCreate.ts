import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDevicePlaylistTypeCreateMutationRequest,
  ApiV1UserDevicePlaylistTypeCreateMutationResponse,
  ApiV1UserDevicePlaylistTypeCreatePathParams,
  ApiV1UserDevicePlaylistTypeCreate201,
} from "../../../models/ts/apiController/ApiV1UserDevicePlaylistTypeCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDevicePlaylistTypeCreateClient = typeof client<ApiV1UserDevicePlaylistTypeCreateMutationResponse, ApiV1UserDevicePlaylistTypeCreate201, ApiV1UserDevicePlaylistTypeCreateMutationRequest>
type ApiV1UserDevicePlaylistTypeCreate = {
  data: ApiV1UserDevicePlaylistTypeCreateMutationResponse
  error: ApiV1UserDevicePlaylistTypeCreate201
  request: ApiV1UserDevicePlaylistTypeCreateMutationRequest
  pathParams: ApiV1UserDevicePlaylistTypeCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDevicePlaylistTypeCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export function useApiV1UserDevicePlaylistTypeCreate(
  id: ApiV1UserDevicePlaylistTypeCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDevicePlaylistTypeCreate["response"], ApiV1UserDevicePlaylistTypeCreate["error"], ApiV1UserDevicePlaylistTypeCreate["request"]>
    client?: ApiV1UserDevicePlaylistTypeCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDevicePlaylistTypeCreate["response"], ApiV1UserDevicePlaylistTypeCreate["error"], ApiV1UserDevicePlaylistTypeCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDevicePlaylistTypeCreate["response"], ApiV1UserDevicePlaylistTypeCreate["error"], ApiV1UserDevicePlaylistTypeCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDevicePlaylistTypeCreate["data"], ApiV1UserDevicePlaylistTypeCreate["error"], ApiV1UserDevicePlaylistTypeCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/playlist-type/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
