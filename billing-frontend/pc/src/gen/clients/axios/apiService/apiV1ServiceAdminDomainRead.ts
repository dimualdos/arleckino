import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDomainReadQueryResponse, ApiV1ServiceAdminDomainReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainRead"

/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export async function apiV1ServiceAdminDomainRead(
  { id }: ApiV1ServiceAdminDomainReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainReadQueryResponse>> {
  const res = await client<ApiV1ServiceAdminDomainReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/domain/${id}/`,
    ...options,
  })
  return res
}
