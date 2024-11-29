import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelListListQueryResponse, ApiV1IptvAdminChannelListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelListList"

/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export async function apiV1IptvAdminChannelListList(
  params?: ApiV1IptvAdminChannelListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelListListQueryResponse>> {
  const res = await client<ApiV1IptvAdminChannelListListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/channel/list/`,
    params,
    ...options,
  })
  return res
}
