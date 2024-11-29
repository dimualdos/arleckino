import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminPromocodeDisableCreateMutationResponse,
  ApiV1ServiceAdminPromocodeDisableCreatePathParams,
  ApiV1ServiceAdminPromocodeDisableCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeDisableCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeDisableCreateClient = typeof client<ApiV1ServiceAdminPromocodeDisableCreateMutationResponse, ApiV1ServiceAdminPromocodeDisableCreate201, never>
type ApiV1ServiceAdminPromocodeDisableCreate = {
  data: ApiV1ServiceAdminPromocodeDisableCreateMutationResponse
  error: ApiV1ServiceAdminPromocodeDisableCreate201
  request: never
  pathParams: ApiV1ServiceAdminPromocodeDisableCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeDisableCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeDisableCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeDisableCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_not_active**Указанный промокод {} не активен.
 * @summary Отключение промокода
 * @link /api/v1/service/admin/promocode/:id/disable */
export function useApiV1ServiceAdminPromocodeDisableCreate(
  id: ApiV1ServiceAdminPromocodeDisableCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminPromocodeDisableCreate["response"], ApiV1ServiceAdminPromocodeDisableCreate["error"], void>
    client?: ApiV1ServiceAdminPromocodeDisableCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminPromocodeDisableCreate["response"], ApiV1ServiceAdminPromocodeDisableCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminPromocodeDisableCreate["response"], ApiV1ServiceAdminPromocodeDisableCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeDisableCreate["data"], ApiV1ServiceAdminPromocodeDisableCreate["error"], void>({
        method: "post",
        url: `/api/v1/service/admin/promocode/${id}/disable`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
