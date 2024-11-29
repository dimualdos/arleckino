import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistListCreateMutationRequest, ApiV1IptvPlaylistListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvPlaylistListCreate"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр всех плейлистов, создание нового плейлиста
 * @link /api/v1/iptv/playlist/list/ */
export async function apiV1IptvPlaylistListCreate(
  data: ApiV1IptvPlaylistListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistListCreateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistListCreateMutationResponse, ApiV1IptvPlaylistListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/playlist/list/`,
    data,
    ...options,
  })
  return res
}
