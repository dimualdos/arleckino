import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest,
  ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse,
  ApiV1IptvAdminChannelGroupPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export async function apiV1IptvAdminChannelGroupPartialUpdate(
  { id }: ApiV1IptvAdminChannelGroupPartialUpdatePathParams,
  data: ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse, ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/admin/channel-group/${id}/`,
    data,
    ...options,
  })
  return res
}
