import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthPasswordResetCreateMutationRequest,
  ApiV1AuthPasswordResetCreateMutationResponse,
  ApiV1AuthPasswordResetCreate201,
} from "../../../models/ts/apiController/ApiV1AuthPasswordResetCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthPasswordResetCreateClient = typeof client<ApiV1AuthPasswordResetCreateMutationResponse, ApiV1AuthPasswordResetCreate201, ApiV1AuthPasswordResetCreateMutationRequest>
type ApiV1AuthPasswordResetCreate = {
  data: ApiV1AuthPasswordResetCreateMutationResponse
  error: ApiV1AuthPasswordResetCreate201
  request: ApiV1AuthPasswordResetCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthPasswordResetCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthPasswordResetCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthPasswordResetCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **email_already_sent**Сообщение уже отправлено на указанный e-mail адрес. Попробуйте через одну минуту.* **user_with_this_email_not_registered**Учетная запись пользователя с указанным e-mail адресом не зарегистрирована.* **user_inactive**Учетная запись пользователя не активна.* **user_is_not_verified**Учетная запись пользователя не подтверждена.* **user_is_blocked**Учетная запись пользователя заблокирована.* **captcha_token_not_valid**Не удалось распознать капчу.* **user_is_deleted**Учетная запись пользователя удалена.
 * @summary Сброс пароля пользователя
 * @link /api/v1/auth/password/reset/ */
export function useApiV1AuthPasswordResetCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthPasswordResetCreate["response"], ApiV1AuthPasswordResetCreate["error"], ApiV1AuthPasswordResetCreate["request"]>
    client?: ApiV1AuthPasswordResetCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthPasswordResetCreate["response"], ApiV1AuthPasswordResetCreate["error"], ApiV1AuthPasswordResetCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthPasswordResetCreate["response"], ApiV1AuthPasswordResetCreate["error"], ApiV1AuthPasswordResetCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthPasswordResetCreate["data"], ApiV1AuthPasswordResetCreate["error"], ApiV1AuthPasswordResetCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/password/reset/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
