import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDevicePlaylistTypeCreateMutationRequest,
  ApiV1UserDevicePlaylistTypeCreateMutationResponse,
  ApiV1UserDevicePlaylistTypeCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDevicePlaylistTypeCreate"

/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export async function apiV1UserDevicePlaylistTypeCreate(
  { id }: ApiV1UserDevicePlaylistTypeCreatePathParams,
  data: ApiV1UserDevicePlaylistTypeCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDevicePlaylistTypeCreateMutationResponse>> {
  const res = await client<ApiV1UserDevicePlaylistTypeCreateMutationResponse, ApiV1UserDevicePlaylistTypeCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/playlist-type/`,
    data,
    ...options,
  })
  return res
}
