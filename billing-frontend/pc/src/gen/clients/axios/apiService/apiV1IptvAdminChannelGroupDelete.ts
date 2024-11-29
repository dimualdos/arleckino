import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminChannelGroupDeleteMutationResponse, ApiV1IptvAdminChannelGroupDeletePathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupDelete"

/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export async function apiV1IptvAdminChannelGroupDelete(
  { id }: ApiV1IptvAdminChannelGroupDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminChannelGroupDeleteMutationResponse>> {
  const res = await client<ApiV1IptvAdminChannelGroupDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/admin/channel-group/${id}/`,
    ...options,
  })
  return res
}
