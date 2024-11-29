import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest,
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams,
  ApiV1IptvPlaylistGroupsDragAndDropCreate201,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsDragAndDropCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsDragAndDropCreateClient = typeof client<
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsDragAndDropCreate201,
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest
>
type ApiV1IptvPlaylistGroupsDragAndDropCreate = {
  data: ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse
  error: ApiV1IptvPlaylistGroupsDragAndDropCreate201
  request: ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsDragAndDropCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsDragAndDropCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsDragAndDropCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **group_not_belong_to_playlist**Группа каналов {group_name} не принадлежит плейлисту {playlist_title}.
 * @summary Изменение порядкового номера группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/drag-and-drop/ */
export function useApiV1IptvPlaylistGroupsDragAndDropCreate(
  id: ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsDragAndDropCreate["response"], ApiV1IptvPlaylistGroupsDragAndDropCreate["error"], ApiV1IptvPlaylistGroupsDragAndDropCreate["request"]>
    client?: ApiV1IptvPlaylistGroupsDragAndDropCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsDragAndDropCreate["response"], ApiV1IptvPlaylistGroupsDragAndDropCreate["error"], ApiV1IptvPlaylistGroupsDragAndDropCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsDragAndDropCreate["response"], ApiV1IptvPlaylistGroupsDragAndDropCreate["error"], ApiV1IptvPlaylistGroupsDragAndDropCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsDragAndDropCreate["data"], ApiV1IptvPlaylistGroupsDragAndDropCreate["error"], ApiV1IptvPlaylistGroupsDragAndDropCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/drag-and-drop/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
