import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileDeleteAccountCreateMutationRequest,
  ApiV1UserProfileDeleteAccountCreateMutationResponse,
  ApiV1UserProfileDeleteAccountCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileDeleteAccountCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileDeleteAccountCreateClient = typeof client<
  ApiV1UserProfileDeleteAccountCreateMutationResponse,
  ApiV1UserProfileDeleteAccountCreate201,
  ApiV1UserProfileDeleteAccountCreateMutationRequest
>
type ApiV1UserProfileDeleteAccountCreate = {
  data: ApiV1UserProfileDeleteAccountCreateMutationResponse
  error: ApiV1UserProfileDeleteAccountCreate201
  request: ApiV1UserProfileDeleteAccountCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileDeleteAccountCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileDeleteAccountCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileDeleteAccountCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_delete_account_token_invalid**Токен указан неверно.
 * @summary Удаление аккаунта пользователя
 * @link /api/v1/user/profile/delete-account */
export function useApiV1UserProfileDeleteAccountCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileDeleteAccountCreate["response"], ApiV1UserProfileDeleteAccountCreate["error"], ApiV1UserProfileDeleteAccountCreate["request"]>
    client?: ApiV1UserProfileDeleteAccountCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileDeleteAccountCreate["response"], ApiV1UserProfileDeleteAccountCreate["error"], ApiV1UserProfileDeleteAccountCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileDeleteAccountCreate["response"], ApiV1UserProfileDeleteAccountCreate["error"], ApiV1UserProfileDeleteAccountCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileDeleteAccountCreate["data"], ApiV1UserProfileDeleteAccountCreate["error"], ApiV1UserProfileDeleteAccountCreate["request"]>({
        method: "post",
        url: `/api/v1/user/profile/delete-account`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
