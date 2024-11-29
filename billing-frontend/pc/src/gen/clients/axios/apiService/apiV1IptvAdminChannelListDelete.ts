import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelListDeleteMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminChannelListDelete"

/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export async function apiV1IptvAdminChannelListDelete(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvAdminChannelListDeleteMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelListDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/admin/channel/list/`,
    ...options,
  })
  return res
}
