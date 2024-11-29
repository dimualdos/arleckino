import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceCheckAllPartialUpdateMutationRequest, ApiV1UserDeviceCheckAllPartialUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserDeviceCheckAllPartialUpdate"

/**
 * @description .
 * @summary Изменение флага выбора всех устройств пользователя
 * @link /api/v1/user/device/check_all/ */
export async function apiV1UserDeviceCheckAllPartialUpdate(
  data: ApiV1UserDeviceCheckAllPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceCheckAllPartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserDeviceCheckAllPartialUpdateMutationResponse, ApiV1UserDeviceCheckAllPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/device/check_all/`,
    data,
    ...options,
  })
  return res
}
