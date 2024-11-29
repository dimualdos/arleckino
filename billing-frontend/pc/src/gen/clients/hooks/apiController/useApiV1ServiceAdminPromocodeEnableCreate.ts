import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminPromocodeEnableCreateMutationResponse,
  ApiV1ServiceAdminPromocodeEnableCreatePathParams,
  ApiV1ServiceAdminPromocodeEnableCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeEnableCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeEnableCreateClient = typeof client<ApiV1ServiceAdminPromocodeEnableCreateMutationResponse, ApiV1ServiceAdminPromocodeEnableCreate201, never>
type ApiV1ServiceAdminPromocodeEnableCreate = {
  data: ApiV1ServiceAdminPromocodeEnableCreateMutationResponse
  error: ApiV1ServiceAdminPromocodeEnableCreate201
  request: never
  pathParams: ApiV1ServiceAdminPromocodeEnableCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeEnableCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeEnableCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeEnableCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_active**Указанный промокод {} активен.* **promocode_is_expired**Срок действия указанного промокода {} истек.* **number_transactions_for_promocode_is_exhausted**Количество транзакций для промокода {} исчерпано.
 * @summary Включение промокода
 * @link /api/v1/service/admin/promocode/:id/enable */
export function useApiV1ServiceAdminPromocodeEnableCreate(
  id: ApiV1ServiceAdminPromocodeEnableCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminPromocodeEnableCreate["response"], ApiV1ServiceAdminPromocodeEnableCreate["error"], void>
    client?: ApiV1ServiceAdminPromocodeEnableCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminPromocodeEnableCreate["response"], ApiV1ServiceAdminPromocodeEnableCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminPromocodeEnableCreate["response"], ApiV1ServiceAdminPromocodeEnableCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeEnableCreate["data"], ApiV1ServiceAdminPromocodeEnableCreate["error"], void>({
        method: "post",
        url: `/api/v1/service/admin/promocode/${id}/enable`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
