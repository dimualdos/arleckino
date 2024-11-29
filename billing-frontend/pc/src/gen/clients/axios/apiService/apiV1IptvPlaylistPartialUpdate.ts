import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistPartialUpdateMutationRequest,
  ApiV1IptvPlaylistPartialUpdateMutationResponse,
  ApiV1IptvPlaylistPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export async function apiV1IptvPlaylistPartialUpdate(
  { id }: ApiV1IptvPlaylistPartialUpdatePathParams,
  data: ApiV1IptvPlaylistPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistPartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistPartialUpdateMutationResponse, ApiV1IptvPlaylistPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${id}/`,
    data,
    ...options,
  })
  return res
}
