import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelListCreateMutationRequest, ApiV1IptvAdminChannelListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminChannelListCreate"

/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export async function apiV1IptvAdminChannelListCreate(
  data: ApiV1IptvAdminChannelListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelListCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelListCreateMutationResponse, ApiV1IptvAdminChannelListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/admin/channel/list/`,
    data,
    ...options,
  })
  return res
}
