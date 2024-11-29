import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistListListQueryResponse, ApiV1IptvPlaylistListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistListList"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр всех плейлистов, создание нового плейлиста
 * @link /api/v1/iptv/playlist/list/ */
export async function apiV1IptvPlaylistListList(
  params?: ApiV1IptvPlaylistListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistListListQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistListListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist/list/`,
    params,
    ...options,
  })
  return res
}
