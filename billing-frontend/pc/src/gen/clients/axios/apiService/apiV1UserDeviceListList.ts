import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceListListQueryResponse, ApiV1UserDeviceListListQueryParams } from "../../../models/ts/apiController/ApiV1UserDeviceListList"

/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.
 * @summary Список устройств, создание нового устройства
 * @link /api/v1/user/device/list/ */
export async function apiV1UserDeviceListList(
  params?: ApiV1UserDeviceListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceListListQueryResponse>> {
  const res = await client<ApiV1UserDeviceListListQueryResponse>({
    method: "get",
    url: `/api/v1/user/device/list/`,
    params,
    ...options,
  })
  return res
}
