import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceLogsListQueryResponse,
  ApiV1UserAdminUserDeviceLogsListPathParams,
  ApiV1UserAdminUserDeviceLogsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceLogsList"

/**
 * @description .
 * @summary Список логов для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/logs/ */
export async function apiV1UserAdminUserDeviceLogsList(
  { deviceId, id }: ApiV1UserAdminUserDeviceLogsListPathParams,
  params?: ApiV1UserAdminUserDeviceLogsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceLogsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceLogsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}/logs/`,
    params,
    ...options,
  })
  return res
}
