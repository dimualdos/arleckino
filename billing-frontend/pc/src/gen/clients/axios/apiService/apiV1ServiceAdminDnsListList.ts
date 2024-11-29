import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDnsListListQueryResponse, ApiV1ServiceAdminDnsListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListList"

/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export async function apiV1ServiceAdminDnsListList(
  params?: ApiV1ServiceAdminDnsListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDnsListListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminDnsListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/dns/list/`,
    params,
    ...options,
  })
  return res
}
