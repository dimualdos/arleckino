import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServicePromocodeApplyCreateMutationRequest,
  ApiV1ServicePromocodeApplyCreateMutationResponse,
  ApiV1ServicePromocodeApplyCreate201,
} from "../../../models/ts/apiController/ApiV1ServicePromocodeApplyCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServicePromocodeApplyCreateClient = typeof client<ApiV1ServicePromocodeApplyCreateMutationResponse, ApiV1ServicePromocodeApplyCreate201, ApiV1ServicePromocodeApplyCreateMutationRequest>
type ApiV1ServicePromocodeApplyCreate = {
  data: ApiV1ServicePromocodeApplyCreateMutationResponse
  error: any
  request: ApiV1ServicePromocodeApplyCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServicePromocodeApplyCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServicePromocodeApplyCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServicePromocodeApplyCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_not_active**Указанный промокод {} не активен.* **promocode_is_expired**Срок действия указанного промокода {} истек.* **number_transactions_for_promocode_is_exhausted**Количество транзакций для промокода {} исчерпано.* **promocode_cannot_be_applied_with_personal_discount**Указана персональная скидка, промокод не может быть применен.
 * @summary Применение промокода
 * @link /api/v1/service/promocode/apply */
export function useApiV1ServicePromocodeApplyCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServicePromocodeApplyCreate["response"], ApiV1ServicePromocodeApplyCreate["error"], ApiV1ServicePromocodeApplyCreate["request"]>
    client?: ApiV1ServicePromocodeApplyCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServicePromocodeApplyCreate["response"], ApiV1ServicePromocodeApplyCreate["error"], ApiV1ServicePromocodeApplyCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServicePromocodeApplyCreate["response"], ApiV1ServicePromocodeApplyCreate["error"], ApiV1ServicePromocodeApplyCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServicePromocodeApplyCreate["data"], ApiV1ServicePromocodeApplyCreate["error"], ApiV1ServicePromocodeApplyCreate["request"]>({
        method: "post",
        url: `/api/v1/service/promocode/apply`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
