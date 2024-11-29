import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest,
  ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse,
  ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsDragAndDropCreate"

/**
 * @description Список сообщений **message_type**:* **group_not_belong_to_playlist**Группа каналов {group_name} не принадлежит плейлисту {playlist_title}.
 * @summary Изменение порядкового номера группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/drag-and-drop/ */
export async function apiV1IptvPlaylistGroupsDragAndDropCreate(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams,
  data?: ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse, ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/drag-and-drop/`,
    data,
    ...options,
  })
  return res
}
