import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1BplDataListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1BplDataList"

/**
 * @description Отбираются активные устройства активных пользователей с указанным playlist_id и view_type=playlist.Отбираются видимые каналы видимых групп для плейлистов.Отбираются форматы файлов с плейлистом.
 * @summary Данные для внешнего сервиса генерации плейлистов.
 * @link /api_external/v1/bpl-data/ */
export async function apiExternalV1BplDataList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiExternalV1BplDataListQueryResponse>> {
  const res = await client<ApiExternalV1BplDataListQueryResponse>({
    method: "get",
    url: `/api_external/v1/bpl-data/`,
    ...options,
  })
  return res
}
