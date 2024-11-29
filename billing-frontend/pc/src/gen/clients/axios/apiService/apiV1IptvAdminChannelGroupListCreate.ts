import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelGroupListCreateMutationRequest, ApiV1IptvAdminChannelGroupListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListCreate"

/**
 * @description Список групп каналов, создание новой группы каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export async function apiV1IptvAdminChannelGroupListCreate(
  data: ApiV1IptvAdminChannelGroupListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupListCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupListCreateMutationResponse, ApiV1IptvAdminChannelGroupListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/admin/channel-group/list/`,
    data,
    ...options,
  })
  return res
}
