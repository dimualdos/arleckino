import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminDomainPartialUpdateMutationRequest,
  ApiV1ServiceAdminDomainPartialUpdateMutationResponse,
  ApiV1ServiceAdminDomainPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminDomainPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainPartialUpdateClient = typeof client<ApiV1ServiceAdminDomainPartialUpdateMutationResponse, never, ApiV1ServiceAdminDomainPartialUpdateMutationRequest>
type ApiV1ServiceAdminDomainPartialUpdate = {
  data: ApiV1ServiceAdminDomainPartialUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminDomainPartialUpdateMutationRequest
  pathParams: ApiV1ServiceAdminDomainPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export function useApiV1ServiceAdminDomainPartialUpdate(
  id: ApiV1ServiceAdminDomainPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminDomainPartialUpdate["response"], ApiV1ServiceAdminDomainPartialUpdate["error"], ApiV1ServiceAdminDomainPartialUpdate["request"]>
    client?: ApiV1ServiceAdminDomainPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminDomainPartialUpdate["response"], ApiV1ServiceAdminDomainPartialUpdate["error"], ApiV1ServiceAdminDomainPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminDomainPartialUpdate["response"], ApiV1ServiceAdminDomainPartialUpdate["error"], ApiV1ServiceAdminDomainPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminDomainPartialUpdate["data"], ApiV1ServiceAdminDomainPartialUpdate["error"], ApiV1ServiceAdminDomainPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/service/admin/domain/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
