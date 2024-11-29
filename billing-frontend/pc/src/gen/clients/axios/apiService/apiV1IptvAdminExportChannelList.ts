import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminExportChannelListQueryResponse } from "../../../models/ts/apiController/ApiV1IptvAdminExportChannelList"

/**
 * @link /api/v1/iptv/admin/export-channel/ */
export async function apiV1IptvAdminExportChannelList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvAdminExportChannelListQueryResponse>> {
  const res = await client<ApiV1IptvAdminExportChannelListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/export-channel/`,
    ...options,
  })
  return res
}
