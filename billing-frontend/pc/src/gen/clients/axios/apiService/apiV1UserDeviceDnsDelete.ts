import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceDnsDeleteMutationResponse, ApiV1UserDeviceDnsDeletePathParams } from "../../../models/ts/apiController/ApiV1UserDeviceDnsDelete"

/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export async function apiV1UserDeviceDnsDelete(
  { id }: ApiV1UserDeviceDnsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceDnsDeleteMutationResponse>> {
  const res = await client<ApiV1UserDeviceDnsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/user/device/${id}/dns/`,
    ...options,
  })
  return res
}
