import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvAdminImportChannelGetDataCreateMutationResponse, ApiV1IptvAdminImportChannelGetDataCreate201 } from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelGetDataCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminImportChannelGetDataCreateClient = typeof client<ApiV1IptvAdminImportChannelGetDataCreateMutationResponse, ApiV1IptvAdminImportChannelGetDataCreate201, never>
type ApiV1IptvAdminImportChannelGetDataCreate = {
  data: ApiV1IptvAdminImportChannelGetDataCreateMutationResponse
  error: ApiV1IptvAdminImportChannelGetDataCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminImportChannelGetDataCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminImportChannelGetDataCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminImportChannelGetDataCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **download_csv_not_found_error**Запрашиваемый URL не был найден на сервере.* **download_csv_connection_error**Ошибка подключения при загрузке CSV файла: {error}.* **download_csv_http_error**Ошибка HTTP при загрузке CSV файла: {error}.* **download_csv_unknown_error**Неизвестная ошибка при загрузке CSV файла: {error}.
 * @summary Получение данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/get-data/ */
export function useApiV1IptvAdminImportChannelGetDataCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminImportChannelGetDataCreate["response"], ApiV1IptvAdminImportChannelGetDataCreate["error"], void>
    client?: ApiV1IptvAdminImportChannelGetDataCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminImportChannelGetDataCreate["response"], ApiV1IptvAdminImportChannelGetDataCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminImportChannelGetDataCreate["response"], ApiV1IptvAdminImportChannelGetDataCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminImportChannelGetDataCreate["data"], ApiV1IptvAdminImportChannelGetDataCreate["error"], void>({
        method: "post",
        url: `/api/v1/iptv/admin/import-channel/get-data/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
