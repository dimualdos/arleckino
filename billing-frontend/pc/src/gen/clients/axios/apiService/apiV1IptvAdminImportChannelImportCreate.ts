import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminImportChannelImportCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelImportCreate"

/**
 * @description .
 * @summary Импорт данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/import/ */
export async function apiV1IptvAdminImportChannelImportCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvAdminImportChannelImportCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminImportChannelImportCreateMutationResponse>({
    method: "post",
    url: `/api/v1/iptv/admin/import-channel/import/`,
    ...options,
  })
  return res
}
