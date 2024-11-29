import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminDomainUpdateMutationRequest,
  ApiV1ServiceAdminDomainUpdateMutationResponse,
  ApiV1ServiceAdminDomainUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainUpdate"

/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export async function apiV1ServiceAdminDomainUpdate(
  { id }: ApiV1ServiceAdminDomainUpdatePathParams,
  data: ApiV1ServiceAdminDomainUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDomainUpdateMutationResponse, ApiV1ServiceAdminDomainUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/service/admin/domain/${id}/`,
    data,
    ...options,
  })
  return res
}
