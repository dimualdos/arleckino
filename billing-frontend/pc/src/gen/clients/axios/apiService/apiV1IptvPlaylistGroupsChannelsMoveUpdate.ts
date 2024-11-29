import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsMoveUpdate"

/**
 * @description Список сообщений **message_type**:* **channel_not_moved_to_group_belongs_to_another_playlist**Канал {channel_name} не может быть перемещен в группу {group_name},принадлежащую другому плейлисту {playlist_title}.
 * @summary Переместить канал в другую группу каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move */
export async function apiV1IptvPlaylistGroupsChannelsMoveUpdate(
  { group_pk, id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams,
  data: ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${group_pk}/channels/${id}/move`,
    data,
    ...options,
  })
  return res
}
