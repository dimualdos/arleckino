import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceDnsReadQueryResponse, ApiV1UserDeviceDnsReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceDnsRead"

/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export async function apiV1UserDeviceDnsRead(
  { id }: ApiV1UserDeviceDnsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceDnsReadQueryResponse>> {
  const res = await client<ApiV1UserDeviceDnsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/device/${id}/dns/`,
    ...options,
  })
  return res
}
