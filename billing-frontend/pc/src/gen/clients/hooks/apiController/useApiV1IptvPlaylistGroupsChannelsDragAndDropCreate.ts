import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate201,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateClient = typeof client<
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate201,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest
>
type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate = {
  data: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse
  error: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate201
  request: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **group_not_belong_to_playlist**Группа каналов {group_name} не принадлежит плейлисту {playlist_title}.* **channel_not_belong_to_group**Канал {channel_name} не принадлежит группе каналов {group_name}.
 * @summary Изменение порядкового номера канала в группе каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/drag-and-drop/ */
export function useApiV1IptvPlaylistGroupsChannelsDragAndDropCreate(
  groupPk: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams["group_pk"],
  id: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["response"],
      ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["error"],
      ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["request"]
    >
    client?: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["response"],
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["error"],
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["response"],
    ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["error"],
    ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["data"],
        ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["error"],
        ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate["request"]
      >({
        method: "post",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${groupPk}/channels/${id}/drag-and-drop/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
