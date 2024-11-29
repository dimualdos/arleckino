import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceListQueryResponse,
  ApiV1UserAdminUserDeviceListPathParams,
  ApiV1UserAdminUserDeviceListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceList"

/**
 * @description .
 * @summary Список устройств пользователя
 * @link /api/v1/user/admin/user/:id/device */
export async function apiV1UserAdminUserDeviceList(
  { id }: ApiV1UserAdminUserDeviceListPathParams,
  params?: ApiV1UserAdminUserDeviceListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/device`,
    params,
    ...options,
  })
  return res
}
