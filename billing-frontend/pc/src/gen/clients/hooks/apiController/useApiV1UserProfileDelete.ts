import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserProfileDeleteMutationResponse, ApiV1UserProfileDelete204 } from "../../../models/ts/apiController/ApiV1UserProfileDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileDeleteClient = typeof client<ApiV1UserProfileDeleteMutationResponse, ApiV1UserProfileDelete204, never>
type ApiV1UserProfileDelete = {
  data: ApiV1UserProfileDeleteMutationResponse
  error: ApiV1UserProfileDelete204
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileDeleteClient>>
  }
}
/**
 * @description .
 * @summary Отправка запроса на удаление аккаунта
 * @link /api/v1/user/profile/ */
export function useApiV1UserProfileDelete(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileDelete["response"], ApiV1UserProfileDelete["error"], void>
    client?: ApiV1UserProfileDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileDelete["response"], ApiV1UserProfileDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileDelete["response"], ApiV1UserProfileDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserProfileDelete["data"], ApiV1UserProfileDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/profile/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
