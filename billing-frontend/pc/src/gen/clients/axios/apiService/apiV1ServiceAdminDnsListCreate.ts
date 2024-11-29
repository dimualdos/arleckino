import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDnsListCreateMutationRequest, ApiV1ServiceAdminDnsListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListCreate"

/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export async function apiV1ServiceAdminDnsListCreate(
  data: ApiV1ServiceAdminDnsListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDnsListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDnsListCreateMutationResponse, ApiV1ServiceAdminDnsListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/admin/dns/list/`,
    data,
    ...options,
  })
  return res
}
