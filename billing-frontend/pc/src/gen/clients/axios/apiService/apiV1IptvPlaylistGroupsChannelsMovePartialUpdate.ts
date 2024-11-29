import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsMovePartialUpdate"

/**
 * @description Список сообщений **message_type**:* **channel_not_moved_to_group_belongs_to_another_playlist**Канал {channel_name} не может быть перемещен в группу {group_name},принадлежащую другому плейлисту {playlist_title}.
 * @summary Переместить канал в другую группу каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move */
export async function apiV1IptvPlaylistGroupsChannelsMovePartialUpdate(
  { group_pk, id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams,
  data: ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${group_pk}/channels/${id}/move`,
    data,
    ...options,
  })
  return res
}
