import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistUpdateMutationRequest, ApiV1IptvPlaylistUpdateMutationResponse, ApiV1IptvPlaylistUpdatePathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistUpdateClient = typeof client<ApiV1IptvPlaylistUpdateMutationResponse, never, ApiV1IptvPlaylistUpdateMutationRequest>
type ApiV1IptvPlaylistUpdate = {
  data: ApiV1IptvPlaylistUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export function useApiV1IptvPlaylistUpdate(
  id: ApiV1IptvPlaylistUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistUpdate["response"], ApiV1IptvPlaylistUpdate["error"], ApiV1IptvPlaylistUpdate["request"]>
    client?: ApiV1IptvPlaylistUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistUpdate["response"], ApiV1IptvPlaylistUpdate["error"], ApiV1IptvPlaylistUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistUpdate["response"], ApiV1IptvPlaylistUpdate["error"], ApiV1IptvPlaylistUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistUpdate["data"], ApiV1IptvPlaylistUpdate["error"], ApiV1IptvPlaylistUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
