import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistReadQueryResponse, ApiV1IptvPlaylistReadPathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistRead"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export async function apiV1IptvPlaylistRead({ id }: ApiV1IptvPlaylistReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvPlaylistReadQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistReadQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist/${id}/`,
    ...options,
  })
  return res
}
