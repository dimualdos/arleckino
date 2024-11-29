import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceCheckAllUpdateMutationRequest, ApiV1UserDeviceCheckAllUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserDeviceCheckAllUpdate"

/**
 * @description .
 * @summary Изменение флага выбора всех устройств пользователя
 * @link /api/v1/user/device/check_all/ */
export async function apiV1UserDeviceCheckAllUpdate(
  data: ApiV1UserDeviceCheckAllUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceCheckAllUpdateMutationResponse>> {
  const res = await client<ApiV1UserDeviceCheckAllUpdateMutationResponse, ApiV1UserDeviceCheckAllUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/device/check_all/`,
    data,
    ...options,
  })
  return res
}
