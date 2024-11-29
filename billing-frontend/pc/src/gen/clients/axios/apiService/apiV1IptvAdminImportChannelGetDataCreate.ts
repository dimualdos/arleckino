import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminImportChannelGetDataCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelGetDataCreate"

/**
 * @description Список сообщений **message_type**:* **download_csv_not_found_error**Запрашиваемый URL не был найден на сервере.* **download_csv_connection_error**Ошибка подключения при загрузке CSV файла: {error}.* **download_csv_http_error**Ошибка HTTP при загрузке CSV файла: {error}.* **download_csv_unknown_error**Неизвестная ошибка при загрузке CSV файла: {error}.
 * @summary Получение данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/get-data/ */
export async function apiV1IptvAdminImportChannelGetDataCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvAdminImportChannelGetDataCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminImportChannelGetDataCreateMutationResponse>({
    method: "post",
    url: `/api/v1/iptv/admin/import-channel/get-data/`,
    ...options,
  })
  return res
}
