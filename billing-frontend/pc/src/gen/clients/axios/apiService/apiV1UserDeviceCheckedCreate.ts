import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceCheckedCreateMutationRequest,
  ApiV1UserDeviceCheckedCreateMutationResponse,
  ApiV1UserDeviceCheckedCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceCheckedCreate"

/**
 * @description .
 * @summary Изменение флага выбора устройства пользователя
 * @link /api/v1/user/device/:id/checked/ */
export async function apiV1UserDeviceCheckedCreate(
  { id }: ApiV1UserDeviceCheckedCreatePathParams,
  data: ApiV1UserDeviceCheckedCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceCheckedCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceCheckedCreateMutationResponse, ApiV1UserDeviceCheckedCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/checked/`,
    data,
    ...options,
  })
  return res
}
