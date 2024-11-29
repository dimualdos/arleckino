import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateClient = typeof client<
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse,
  never,
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest
>
type ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate = {
  data: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **channel_not_moved_to_group_belongs_to_another_playlist**Канал {channel_name} не может быть перемещен в группу {group_name},принадлежащую другому плейлисту {playlist_title}.
 * @summary Переместить канал в другую группу каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move */
export function useApiV1IptvPlaylistGroupsChannelsMovePartialUpdate(
  groupPk: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams["group_pk"],
  id: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["response"],
      ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["error"],
      ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["request"]
    >
    client?: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["response"],
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["error"],
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["response"],
    ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["error"],
    ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["data"],
        ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["error"],
        ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${groupPk}/channels/${id}/move`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
