import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistDeleteMutationResponse, ApiV1IptvPlaylistDeletePathParams, ApiV1IptvPlaylistDelete204 } from "../../../models/ts/apiController/ApiV1IptvPlaylistDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistDeleteClient = typeof client<ApiV1IptvPlaylistDeleteMutationResponse, ApiV1IptvPlaylistDelete204, never>
type ApiV1IptvPlaylistDelete = {
  data: ApiV1IptvPlaylistDeleteMutationResponse
  error: ApiV1IptvPlaylistDelete204
  request: never
  pathParams: ApiV1IptvPlaylistDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export function useApiV1IptvPlaylistDelete(
  id: ApiV1IptvPlaylistDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistDelete["response"], ApiV1IptvPlaylistDelete["error"], void>
    client?: ApiV1IptvPlaylistDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistDelete["response"], ApiV1IptvPlaylistDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistDelete["response"], ApiV1IptvPlaylistDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvPlaylistDelete["data"], ApiV1IptvPlaylistDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/playlist/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
