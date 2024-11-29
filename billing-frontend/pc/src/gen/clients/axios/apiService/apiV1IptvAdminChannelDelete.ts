import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelDeleteMutationResponse, ApiV1IptvAdminChannelDeletePathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelDelete"

/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export async function apiV1IptvAdminChannelDelete(
  { id }: ApiV1IptvAdminChannelDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelDeleteMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/admin/channel/${id}/`,
    ...options,
  })
  return res
}
