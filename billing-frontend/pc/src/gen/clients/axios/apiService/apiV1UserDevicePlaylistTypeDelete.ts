import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDevicePlaylistTypeDeleteMutationResponse, ApiV1UserDevicePlaylistTypeDeletePathParams } from "../../../models/ts/apiController/ApiV1UserDevicePlaylistTypeDelete"

/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export async function apiV1UserDevicePlaylistTypeDelete(
  { id }: ApiV1UserDevicePlaylistTypeDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDevicePlaylistTypeDeleteMutationResponse>> {
  const res = await client<ApiV1UserDevicePlaylistTypeDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/user/device/${id}/playlist-type/`,
    ...options,
  })
  return res
}
