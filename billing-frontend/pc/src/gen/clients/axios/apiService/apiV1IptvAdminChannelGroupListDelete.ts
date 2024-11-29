import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelGroupListDeleteMutationResponse } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListDelete"

/**
 * @description Удаление всех групп каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export async function apiV1IptvAdminChannelGroupListDelete(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupListDeleteMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupListDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/admin/channel-group/list/`,
    ...options,
  })
  return res
}
