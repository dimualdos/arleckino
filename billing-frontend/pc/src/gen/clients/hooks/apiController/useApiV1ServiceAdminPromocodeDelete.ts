import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminPromocodeDeleteMutationResponse,
  ApiV1ServiceAdminPromocodeDeletePathParams,
  ApiV1ServiceAdminPromocodeDelete204,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeDeleteClient = typeof client<ApiV1ServiceAdminPromocodeDeleteMutationResponse, ApiV1ServiceAdminPromocodeDelete204, never>
type ApiV1ServiceAdminPromocodeDelete = {
  data: ApiV1ServiceAdminPromocodeDeleteMutationResponse
  error: ApiV1ServiceAdminPromocodeDelete204
  request: never
  pathParams: ApiV1ServiceAdminPromocodeDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **promocode_delete_is_impossible**Обнаружено {} транзакций применения данного промокода, удаление невозможно.
 * @summary Удаление промокода.
 * @link /api/v1/service/admin/promocode/:id/ */
export function useApiV1ServiceAdminPromocodeDelete(
  id: ApiV1ServiceAdminPromocodeDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminPromocodeDelete["response"], ApiV1ServiceAdminPromocodeDelete["error"], void>
    client?: ApiV1ServiceAdminPromocodeDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminPromocodeDelete["response"], ApiV1ServiceAdminPromocodeDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminPromocodeDelete["response"], ApiV1ServiceAdminPromocodeDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeDelete["data"], ApiV1ServiceAdminPromocodeDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/admin/promocode/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
