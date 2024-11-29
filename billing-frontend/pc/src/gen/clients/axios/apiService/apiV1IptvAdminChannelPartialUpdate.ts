import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelPartialUpdateMutationRequest,
  ApiV1IptvAdminChannelPartialUpdateMutationResponse,
  ApiV1IptvAdminChannelPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelPartialUpdate"

/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export async function apiV1IptvAdminChannelPartialUpdate(
  { id }: ApiV1IptvAdminChannelPartialUpdatePathParams,
  data: ApiV1IptvAdminChannelPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelPartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelPartialUpdateMutationResponse, ApiV1IptvAdminChannelPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/admin/channel/${id}/`,
    data,
    ...options,
  })
  return res
}
