import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminDomainPartialUpdateMutationRequest,
  ApiV1ServiceAdminDomainPartialUpdateMutationResponse,
  ApiV1ServiceAdminDomainPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export async function apiV1ServiceAdminDomainPartialUpdate(
  { id }: ApiV1ServiceAdminDomainPartialUpdatePathParams,
  data: ApiV1ServiceAdminDomainPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminDomainPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminDomainPartialUpdateMutationResponse, ApiV1ServiceAdminDomainPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/service/admin/domain/${id}/`,
    data,
    ...options,
  })
  return res
}
