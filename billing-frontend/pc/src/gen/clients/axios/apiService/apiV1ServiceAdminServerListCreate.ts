import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminServerListCreateMutationRequest, ApiV1ServiceAdminServerListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminServerListCreate"

/**
 * @description Список сообщений **message_type**:* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Список серверов, создание нового сервера
 * @link /api/v1/service/admin/server/list/ */
export async function apiV1ServiceAdminServerListCreate(
  data?: ApiV1ServiceAdminServerListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminServerListCreateMutationResponse, ApiV1ServiceAdminServerListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/admin/server/list/`,
    data,
    ...options,
  })
  return res
}
