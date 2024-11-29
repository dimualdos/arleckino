import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelGroupListListQueryResponse, ApiV1IptvAdminChannelGroupListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListList"

/**
 * @description Список групп каналов, создание новой группы каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export async function apiV1IptvAdminChannelGroupListList(
  params?: ApiV1IptvAdminChannelGroupListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupListListQueryResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupListListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/channel-group/list/`,
    params,
    ...options,
  })
  return res
}
