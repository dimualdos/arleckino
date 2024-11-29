import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1PlaylistReadQueryResponse, ApiExternalV1PlaylistReadPathParams } from "../../../models/ts/apiExternalController/ApiExternalV1PlaylistRead"

/**
 * @description Список сообщений **message_type**:* **device_not_found_by_ott_id**Устройство пользователя с указанным OttId не обнаружено.* **device_not_bind_server**Устройство пользователя с указанным OttId не связано с сервером.* **playlist_type_not_found_by_format_name**Указанный формат плейлиста не поддерживается.* **playlist_formatter_not_contain_handler_specified_format**Механизм формирования плейлиста в указанном формате еще не реализован.
 * @summary Получение плейлиста в указанном формате для устройства пользователя с указанным OttId
 * @link /api_external/v1/playlist/:ott_id/:fmt/ */
export async function apiExternalV1PlaylistRead(
  { fmt, ott_id }: ApiExternalV1PlaylistReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiExternalV1PlaylistReadQueryResponse>> {
  const res = await client<ApiExternalV1PlaylistReadQueryResponse>({
    method: "get",
    url: `/api_external/v1/playlist/${ott_id}/${fmt}/`,
    ...options,
  })
  return res
}
