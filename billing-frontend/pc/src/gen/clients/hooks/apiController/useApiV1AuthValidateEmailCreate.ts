import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthValidateEmailCreateMutationRequest,
  ApiV1AuthValidateEmailCreateMutationResponse,
  ApiV1AuthValidateEmailCreate201,
} from "../../../models/ts/apiController/ApiV1AuthValidateEmailCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthValidateEmailCreateClient = typeof client<ApiV1AuthValidateEmailCreateMutationResponse, ApiV1AuthValidateEmailCreate201, ApiV1AuthValidateEmailCreateMutationRequest>
type ApiV1AuthValidateEmailCreate = {
  data: ApiV1AuthValidateEmailCreateMutationResponse
  error: ApiV1AuthValidateEmailCreate201
  request: ApiV1AuthValidateEmailCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthValidateEmailCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthValidateEmailCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthValidateEmailCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_already_exists**Пользователь с таким e-mail адресом уже зарегистрирован.
 * @summary Проверка адреса e-mail
 * @link /api/v1/auth/validate/email/ */
export function useApiV1AuthValidateEmailCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthValidateEmailCreate["response"], ApiV1AuthValidateEmailCreate["error"], ApiV1AuthValidateEmailCreate["request"]>
    client?: ApiV1AuthValidateEmailCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthValidateEmailCreate["response"], ApiV1AuthValidateEmailCreate["error"], ApiV1AuthValidateEmailCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthValidateEmailCreate["response"], ApiV1AuthValidateEmailCreate["error"], ApiV1AuthValidateEmailCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthValidateEmailCreate["data"], ApiV1AuthValidateEmailCreate["error"], ApiV1AuthValidateEmailCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/validate/email/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
