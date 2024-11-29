import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminDomainUpdateMutationRequest,
  ApiV1ServiceAdminDomainUpdateMutationResponse,
  ApiV1ServiceAdminDomainUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainUpdateClient = typeof client<ApiV1ServiceAdminDomainUpdateMutationResponse, never, ApiV1ServiceAdminDomainUpdateMutationRequest>
type ApiV1ServiceAdminDomainUpdate = {
  data: ApiV1ServiceAdminDomainUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminDomainUpdateMutationRequest
  pathParams: ApiV1ServiceAdminDomainUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export function useApiV1ServiceAdminDomainUpdate(
  id: ApiV1ServiceAdminDomainUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDomainUpdate["response"], ApiV1ServiceAdminDomainUpdate["error"], ApiV1ServiceAdminDomainUpdate["request"]>
    client?: ApiV1ServiceAdminDomainUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDomainUpdate["response"], ApiV1ServiceAdminDomainUpdate["error"], ApiV1ServiceAdminDomainUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDomainUpdate["response"], ApiV1ServiceAdminDomainUpdate["error"], ApiV1ServiceAdminDomainUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminDomainUpdate["data"], ApiV1ServiceAdminDomainUpdate["error"], ApiV1ServiceAdminDomainUpdate["request"]>({
        method: "put",
        url: `/api/v1/service/admin/domain/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
