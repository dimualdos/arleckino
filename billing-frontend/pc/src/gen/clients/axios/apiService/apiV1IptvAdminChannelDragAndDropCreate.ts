import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelDragAndDropCreateMutationRequest,
  ApiV1IptvAdminChannelDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelDragAndDropCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelDragAndDropCreate"

/**
 * @description Апи представление для изменения порядкового номера канала по умолчанию
 * @link /api/v1/iptv/admin/channel/:id/drag-and-drop/ */
export async function apiV1IptvAdminChannelDragAndDropCreate(
  { id }: ApiV1IptvAdminChannelDragAndDropCreatePathParams,
  data: ApiV1IptvAdminChannelDragAndDropCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelDragAndDropCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelDragAndDropCreateMutationResponse, ApiV1IptvAdminChannelDragAndDropCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/admin/channel/${id}/drag-and-drop/`,
    data,
    ...options,
  })
  return res
}
