import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelUpdateMutationRequest,
  ApiV1IptvAdminChannelUpdateMutationResponse,
  ApiV1IptvAdminChannelUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelUpdate"

/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export async function apiV1IptvAdminChannelUpdate(
  { id }: ApiV1IptvAdminChannelUpdatePathParams,
  data: ApiV1IptvAdminChannelUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelUpdateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelUpdateMutationResponse, ApiV1IptvAdminChannelUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/admin/channel/${id}/`,
    data,
    ...options,
  })
  return res
}
