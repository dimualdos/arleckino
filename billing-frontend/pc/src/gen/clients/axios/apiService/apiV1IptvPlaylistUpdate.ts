import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistUpdateMutationRequest, ApiV1IptvPlaylistUpdateMutationResponse, ApiV1IptvPlaylistUpdatePathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistUpdate"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export async function apiV1IptvPlaylistUpdate(
  { id }: ApiV1IptvPlaylistUpdatePathParams,
  data: ApiV1IptvPlaylistUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistUpdateMutationResponse, ApiV1IptvPlaylistUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${id}/`,
    data,
    ...options,
  })
  return res
}
