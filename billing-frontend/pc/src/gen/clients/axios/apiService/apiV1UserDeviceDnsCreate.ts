import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceDnsCreateMutationRequest, ApiV1UserDeviceDnsCreateMutationResponse, ApiV1UserDeviceDnsCreatePathParams } from "../../../models/ts/apiController/ApiV1UserDeviceDnsCreate"

/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export async function apiV1UserDeviceDnsCreate(
  { id }: ApiV1UserDeviceDnsCreatePathParams,
  data: ApiV1UserDeviceDnsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceDnsCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceDnsCreateMutationResponse, ApiV1UserDeviceDnsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/dns/`,
    data,
    ...options,
  })
  return res
}
