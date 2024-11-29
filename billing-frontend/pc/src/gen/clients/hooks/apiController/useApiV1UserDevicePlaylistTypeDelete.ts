import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDevicePlaylistTypeDeleteMutationResponse,
  ApiV1UserDevicePlaylistTypeDeletePathParams,
  ApiV1UserDevicePlaylistTypeDelete204,
} from "../../../models/ts/apiController/ApiV1UserDevicePlaylistTypeDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDevicePlaylistTypeDeleteClient = typeof client<ApiV1UserDevicePlaylistTypeDeleteMutationResponse, ApiV1UserDevicePlaylistTypeDelete204, never>
type ApiV1UserDevicePlaylistTypeDelete = {
  data: ApiV1UserDevicePlaylistTypeDeleteMutationResponse
  error: ApiV1UserDevicePlaylistTypeDelete204
  request: never
  pathParams: ApiV1UserDevicePlaylistTypeDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDevicePlaylistTypeDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export function useApiV1UserDevicePlaylistTypeDelete(
  id: ApiV1UserDevicePlaylistTypeDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDevicePlaylistTypeDelete["response"], ApiV1UserDevicePlaylistTypeDelete["error"], void>
    client?: ApiV1UserDevicePlaylistTypeDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDevicePlaylistTypeDelete["response"], ApiV1UserDevicePlaylistTypeDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDevicePlaylistTypeDelete["response"], ApiV1UserDevicePlaylistTypeDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserDevicePlaylistTypeDelete["data"], ApiV1UserDevicePlaylistTypeDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/device/${id}/playlist-type/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
