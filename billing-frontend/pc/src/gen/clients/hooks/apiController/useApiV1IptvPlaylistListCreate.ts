import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistListCreateMutationRequest,
  ApiV1IptvPlaylistListCreateMutationResponse,
  ApiV1IptvPlaylistListCreate201,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistListCreateClient = typeof client<ApiV1IptvPlaylistListCreateMutationResponse, ApiV1IptvPlaylistListCreate201, ApiV1IptvPlaylistListCreateMutationRequest>
type ApiV1IptvPlaylistListCreate = {
  data: ApiV1IptvPlaylistListCreateMutationResponse
  error: ApiV1IptvPlaylistListCreate201
  request: ApiV1IptvPlaylistListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр всех плейлистов, создание нового плейлиста
 * @link /api/v1/iptv/playlist/list/ */
export function useApiV1IptvPlaylistListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistListCreate["response"], ApiV1IptvPlaylistListCreate["error"], ApiV1IptvPlaylistListCreate["request"]>
    client?: ApiV1IptvPlaylistListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistListCreate["response"], ApiV1IptvPlaylistListCreate["error"], ApiV1IptvPlaylistListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistListCreate["response"], ApiV1IptvPlaylistListCreate["error"], ApiV1IptvPlaylistListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistListCreate["data"], ApiV1IptvPlaylistListCreate["error"], ApiV1IptvPlaylistListCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/playlist/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
