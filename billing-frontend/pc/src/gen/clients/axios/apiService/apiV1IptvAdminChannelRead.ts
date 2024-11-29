import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelReadQueryResponse, ApiV1IptvAdminChannelReadPathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelRead"

/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export async function apiV1IptvAdminChannelRead(
  { id }: ApiV1IptvAdminChannelReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelReadQueryResponse>> {
  const res = await client<ApiV1IptvAdminChannelReadQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/channel/${id}/`,
    ...options,
  })
  return res
}
