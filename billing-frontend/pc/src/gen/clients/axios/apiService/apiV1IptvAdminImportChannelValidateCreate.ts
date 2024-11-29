import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminImportChannelValidateCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelValidateCreate"

/**
 * @description .
 * @summary Проверка данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/validate/ */
export async function apiV1IptvAdminImportChannelValidateCreate(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminImportChannelValidateCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminImportChannelValidateCreateMutationResponse>({
    method: "post",
    url: `/api/v1/iptv/admin/import-channel/validate/`,
    ...options,
  })
  return res
}
