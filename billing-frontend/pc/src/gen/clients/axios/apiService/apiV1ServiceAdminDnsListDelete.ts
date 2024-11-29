import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDnsListDeleteMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListDelete"

/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export async function apiV1ServiceAdminDnsListDelete(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1ServiceAdminDnsListDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDnsListDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/admin/dns/list/`,
    ...options,
  })
  return res
}
