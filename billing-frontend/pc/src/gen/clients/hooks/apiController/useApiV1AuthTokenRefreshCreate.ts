import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthTokenRefreshCreateMutationResponse, ApiV1AuthTokenRefreshCreate201 } from "../../../models/ts/apiController/ApiV1AuthTokenRefreshCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthTokenRefreshCreateClient = typeof client<ApiV1AuthTokenRefreshCreateMutationResponse, ApiV1AuthTokenRefreshCreate201, never>
type ApiV1AuthTokenRefreshCreate = {
  data: ApiV1AuthTokenRefreshCreateMutationResponse
  error: ApiV1AuthTokenRefreshCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthTokenRefreshCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthTokenRefreshCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthTokenRefreshCreateClient>>
  }
}
/**
 * @description .
 * @summary Продление срока действия токена
 * @link /api/v1/auth/token/refresh/ */
export function useApiV1AuthTokenRefreshCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthTokenRefreshCreate["response"], ApiV1AuthTokenRefreshCreate["error"], void>
    client?: ApiV1AuthTokenRefreshCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthTokenRefreshCreate["response"], ApiV1AuthTokenRefreshCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthTokenRefreshCreate["response"], ApiV1AuthTokenRefreshCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1AuthTokenRefreshCreate["data"], ApiV1AuthTokenRefreshCreate["error"], void>({
        method: "post",
        url: `/api/v1/auth/token/refresh/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
