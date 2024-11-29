import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthSignOutCreateMutationResponse, ApiV1AuthSignOutCreate201 } from "../../../models/ts/apiController/ApiV1AuthSignOutCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthSignOutCreateClient = typeof client<ApiV1AuthSignOutCreateMutationResponse, ApiV1AuthSignOutCreate201, never>
type ApiV1AuthSignOutCreate = {
  data: ApiV1AuthSignOutCreateMutationResponse
  error: ApiV1AuthSignOutCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthSignOutCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthSignOutCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthSignOutCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_not_authenticated**Пользователь не авторизован.
 * @summary Выход пользователя
 * @link /api/v1/auth/sign-out/ */
export function useApiV1AuthSignOutCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthSignOutCreate["response"], ApiV1AuthSignOutCreate["error"], void>
    client?: ApiV1AuthSignOutCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthSignOutCreate["response"], ApiV1AuthSignOutCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthSignOutCreate["response"], ApiV1AuthSignOutCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1AuthSignOutCreate["data"], ApiV1AuthSignOutCreate["error"], void>({
        method: "post",
        url: `/api/v1/auth/sign-out/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
