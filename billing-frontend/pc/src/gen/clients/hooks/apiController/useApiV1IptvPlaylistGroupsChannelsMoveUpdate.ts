import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsMoveUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsChannelsMoveUpdateClient = typeof client<ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsChannelsMoveUpdate = {
  data: ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsMoveUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsChannelsMoveUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsMoveUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **channel_not_moved_to_group_belongs_to_another_playlist**Канал {channel_name} не может быть перемещен в группу {group_name},принадлежащую другому плейлисту {playlist_title}.
 * @summary Переместить канал в другую группу каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move */
export function useApiV1IptvPlaylistGroupsChannelsMoveUpdate(
  groupPk: ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams["group_pk"],
  id: ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsChannelsMoveUpdate["response"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["error"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsChannelsMoveUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsChannelsMoveUpdate["response"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["error"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsChannelsMoveUpdate["response"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["error"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsChannelsMoveUpdate["data"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["error"], ApiV1IptvPlaylistGroupsChannelsMoveUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${groupPk}/channels/${id}/move`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
