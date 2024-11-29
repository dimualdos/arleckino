import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileChangeEmailCreateMutationRequest,
  ApiV1UserProfileChangeEmailCreateMutationResponse,
  ApiV1UserProfileChangeEmailCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileChangeEmailCreateClient = typeof client<ApiV1UserProfileChangeEmailCreateMutationResponse, ApiV1UserProfileChangeEmailCreate201, ApiV1UserProfileChangeEmailCreateMutationRequest>
type ApiV1UserProfileChangeEmailCreate = {
  data: ApiV1UserProfileChangeEmailCreateMutationResponse
  error: ApiV1UserProfileChangeEmailCreate201
  request: ApiV1UserProfileChangeEmailCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileChangeEmailCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileChangeEmailCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileChangeEmailCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_change_email_token_invalid**Токен указан неверно.
 * @summary Изменение email пользователя
 * @link /api/v1/user/profile/change-email */
export function useApiV1UserProfileChangeEmailCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileChangeEmailCreate["response"], ApiV1UserProfileChangeEmailCreate["error"], ApiV1UserProfileChangeEmailCreate["request"]>
    client?: ApiV1UserProfileChangeEmailCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileChangeEmailCreate["response"], ApiV1UserProfileChangeEmailCreate["error"], ApiV1UserProfileChangeEmailCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileChangeEmailCreate["response"], ApiV1UserProfileChangeEmailCreate["error"], ApiV1UserProfileChangeEmailCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileChangeEmailCreate["data"], ApiV1UserProfileChangeEmailCreate["error"], ApiV1UserProfileChangeEmailCreate["request"]>({
        method: "post",
        url: `/api/v1/user/profile/change-email`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
