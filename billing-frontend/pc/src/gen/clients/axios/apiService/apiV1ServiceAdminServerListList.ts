import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminServerListListQueryResponse, ApiV1ServiceAdminServerListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminServerListList"

/**
 * @description Список сообщений **message_type**:* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Список серверов, создание нового сервера
 * @link /api/v1/service/admin/server/list/ */
export async function apiV1ServiceAdminServerListList(
  params?: ApiV1ServiceAdminServerListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerListListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminServerListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/server/list/`,
    params,
    ...options,
  })
  return res
}
