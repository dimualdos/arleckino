import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthSignInCreateMutationRequest, ApiV1AuthSignInCreateMutationResponse, ApiV1AuthSignInCreate201 } from "../../../models/ts/apiController/ApiV1AuthSignInCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthSignInCreateClient = typeof client<ApiV1AuthSignInCreateMutationResponse, ApiV1AuthSignInCreate201, ApiV1AuthSignInCreateMutationRequest>
type ApiV1AuthSignInCreate = {
  data: ApiV1AuthSignInCreateMutationResponse
  error: ApiV1AuthSignInCreate201
  request: ApiV1AuthSignInCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthSignInCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthSignInCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthSignInCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **auth_error**Неверный пароль или адрес электронной почты.* **user_inactive**Учетная запись пользователя не активна.* **user_is_not_verified**Учетная запись пользователя не подтверждена.* **user_is_blocked**Учетная запись пользователя заблокирована.* **captcha_token_not_valid**Не удалось распознать капчу.* **user_is_deleted**Учетная запись пользователя удалена.
 * @summary Вход пользователя
 * @link /api/v1/auth/sign-in/ */
export function useApiV1AuthSignInCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthSignInCreate["response"], ApiV1AuthSignInCreate["error"], ApiV1AuthSignInCreate["request"]>
    client?: ApiV1AuthSignInCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthSignInCreate["response"], ApiV1AuthSignInCreate["error"], ApiV1AuthSignInCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthSignInCreate["response"], ApiV1AuthSignInCreate["error"], ApiV1AuthSignInCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthSignInCreate["data"], ApiV1AuthSignInCreate["error"], ApiV1AuthSignInCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/sign-in/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
