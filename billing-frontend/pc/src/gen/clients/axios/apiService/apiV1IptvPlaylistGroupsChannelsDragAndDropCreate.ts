import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate"

/**
 * @description Список сообщений **message_type**:* **group_not_belong_to_playlist**Группа каналов {group_name} не принадлежит плейлисту {playlist_title}.* **channel_not_belong_to_group**Канал {channel_name} не принадлежит группе каналов {group_name}.
 * @summary Изменение порядкового номера канала в группе каналов плейлиста
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/drag-and-drop/ */
export async function apiV1IptvPlaylistGroupsChannelsDragAndDropCreate(
  { group_pk, id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams,
  data?: ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse, ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${group_pk}/channels/${id}/drag-and-drop/`,
    data,
    ...options,
  })
  return res
}
