import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserRawPasswordCreateMutationRequest,
  ApiV1UserAdminUserRawPasswordCreateMutationResponse,
  ApiV1UserAdminUserRawPasswordCreatePathParams,
  ApiV1UserAdminUserRawPasswordCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserRawPasswordCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserRawPasswordCreateClient = typeof client<
  ApiV1UserAdminUserRawPasswordCreateMutationResponse,
  ApiV1UserAdminUserRawPasswordCreate201,
  ApiV1UserAdminUserRawPasswordCreateMutationRequest
>
type ApiV1UserAdminUserRawPasswordCreate = {
  data: ApiV1UserAdminUserRawPasswordCreateMutationResponse
  error: ApiV1UserAdminUserRawPasswordCreate201
  request: ApiV1UserAdminUserRawPasswordCreateMutationRequest
  pathParams: ApiV1UserAdminUserRawPasswordCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserRawPasswordCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserRawPasswordCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserRawPasswordCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_raw_password_is_empty**Не удалось получить пароль пользователя.* **raw_password_decode_pin_invalid**Неверно указан пин-код для декодирования пароля пользователя, попытка {} из {}.* **raw_password_decode_pin_attempts_count_is_exhausted**Исчерпано количество повторных попыток ввода пин-код ({} из {}) для декодирования пароля пользователя в сутки.Время блокировки истекает в {}.
 * @summary Получение пароля пользователя администратором
 * @link /api/v1/user/admin/user/:id/raw-password/ */
export function useApiV1UserAdminUserRawPasswordCreate(
  id: ApiV1UserAdminUserRawPasswordCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserRawPasswordCreate["response"], ApiV1UserAdminUserRawPasswordCreate["error"], ApiV1UserAdminUserRawPasswordCreate["request"]>
    client?: ApiV1UserAdminUserRawPasswordCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserRawPasswordCreate["response"], ApiV1UserAdminUserRawPasswordCreate["error"], ApiV1UserAdminUserRawPasswordCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserRawPasswordCreate["response"], ApiV1UserAdminUserRawPasswordCreate["error"], ApiV1UserAdminUserRawPasswordCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserRawPasswordCreate["data"], ApiV1UserAdminUserRawPasswordCreate["error"], ApiV1UserAdminUserRawPasswordCreate["request"]>({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/raw-password/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
