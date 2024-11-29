import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelGroupReadQueryResponse, ApiV1IptvAdminChannelGroupReadPathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupRead"

/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export async function apiV1IptvAdminChannelGroupRead(
  { id }: ApiV1IptvAdminChannelGroupReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupReadQueryResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupReadQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/channel-group/${id}/`,
    ...options,
  })
  return res
}
