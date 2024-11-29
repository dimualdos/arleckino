import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest,
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupDragAndDropCreate"

/**
 * @description Изменение позиции группы каналов плейлисте
 * @link /api/v1/iptv/admin/channel-group/:id/drag-and-drop/ */
export async function apiV1IptvAdminChannelGroupDragAndDropCreate(
  { id }: ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams,
  data: ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse, ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/admin/channel-group/${id}/drag-and-drop/`,
    data,
    ...options,
  })
  return res
}
