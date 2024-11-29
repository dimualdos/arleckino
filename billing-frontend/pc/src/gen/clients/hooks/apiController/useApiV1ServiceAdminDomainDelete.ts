import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminDomainDeleteMutationResponse,
  ApiV1ServiceAdminDomainDeletePathParams,
  ApiV1ServiceAdminDomainDelete204,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainDeleteClient = typeof client<ApiV1ServiceAdminDomainDeleteMutationResponse, ApiV1ServiceAdminDomainDelete204, never>
type ApiV1ServiceAdminDomainDelete = {
  data: ApiV1ServiceAdminDomainDeleteMutationResponse
  error: ApiV1ServiceAdminDomainDelete204
  request: never
  pathParams: ApiV1ServiceAdminDomainDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export function useApiV1ServiceAdminDomainDelete(
  id: ApiV1ServiceAdminDomainDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDomainDelete["response"], ApiV1ServiceAdminDomainDelete["error"], void>
    client?: ApiV1ServiceAdminDomainDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDomainDelete["response"], ApiV1ServiceAdminDomainDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDomainDelete["response"], ApiV1ServiceAdminDomainDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminDomainDelete["data"], ApiV1ServiceAdminDomainDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/admin/domain/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
