import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminDomainDeleteMutationResponse, ApiV1ServiceAdminDomainDeletePathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainDelete"

/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export async function apiV1ServiceAdminDomainDelete(
  { id }: ApiV1ServiceAdminDomainDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDomainDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/admin/domain/${id}/`,
    ...options,
  })
  return res
}
