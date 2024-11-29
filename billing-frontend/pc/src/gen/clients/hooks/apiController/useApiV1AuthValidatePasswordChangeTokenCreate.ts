import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest,
  ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse,
  ApiV1AuthValidatePasswordChangeTokenCreate201,
} from "../../../models/ts/apiController/ApiV1AuthValidatePasswordChangeTokenCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthValidatePasswordChangeTokenCreateClient = typeof client<
  ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse,
  ApiV1AuthValidatePasswordChangeTokenCreate201,
  ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest
>
type ApiV1AuthValidatePasswordChangeTokenCreate = {
  data: ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse
  error: ApiV1AuthValidatePasswordChangeTokenCreate201
  request: ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthValidatePasswordChangeTokenCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthValidatePasswordChangeTokenCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthValidatePasswordChangeTokenCreateClient>>
  }
}
/**
 * @description .
 * @summary Проверка токена подтверждения сброса пароля
 * @link /api/v1/auth/validate/password-change-token/ */
export function useApiV1AuthValidatePasswordChangeTokenCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthValidatePasswordChangeTokenCreate["response"], ApiV1AuthValidatePasswordChangeTokenCreate["error"], ApiV1AuthValidatePasswordChangeTokenCreate["request"]>
    client?: ApiV1AuthValidatePasswordChangeTokenCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthValidatePasswordChangeTokenCreate["response"], ApiV1AuthValidatePasswordChangeTokenCreate["error"], ApiV1AuthValidatePasswordChangeTokenCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthValidatePasswordChangeTokenCreate["response"], ApiV1AuthValidatePasswordChangeTokenCreate["error"], ApiV1AuthValidatePasswordChangeTokenCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthValidatePasswordChangeTokenCreate["data"], ApiV1AuthValidatePasswordChangeTokenCreate["error"], ApiV1AuthValidatePasswordChangeTokenCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/validate/password-change-token/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
