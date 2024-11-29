import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceListCreateMutationRequest, ApiV1UserDeviceListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserDeviceListCreate"

/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.
 * @summary Список устройств, создание нового устройства
 * @link /api/v1/user/device/list/ */
export async function apiV1UserDeviceListCreate(
  data?: ApiV1UserDeviceListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceListCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceListCreateMutationResponse, ApiV1UserDeviceListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/list/`,
    data,
    ...options,
  })
  return res
}
