import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistDeleteMutationResponse, ApiV1IptvPlaylistDeletePathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistDelete"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export async function apiV1IptvPlaylistDelete(
  { id }: ApiV1IptvPlaylistDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistDeleteMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/playlist/${id}/`,
    ...options,
  })
  return res
}
