import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvAdminChannelGroupUpdateMutationRequest,
  ApiV1IptvAdminChannelGroupUpdateMutationResponse,
  ApiV1IptvAdminChannelGroupUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupUpdate"

/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export async function apiV1IptvAdminChannelGroupUpdate(
  { id }: ApiV1IptvAdminChannelGroupUpdatePathParams,
  data: ApiV1IptvAdminChannelGroupUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupUpdateMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupUpdateMutationResponse, ApiV1IptvAdminChannelGroupUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/admin/channel-group/${id}/`,
    data,
    ...options,
  })
  return res
}
