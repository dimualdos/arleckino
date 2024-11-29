import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthValidateReferralTokenCreateMutationRequest,
  ApiV1AuthValidateReferralTokenCreateMutationResponse,
  ApiV1AuthValidateReferralTokenCreate201,
} from "../../../models/ts/apiController/ApiV1AuthValidateReferralTokenCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthValidateReferralTokenCreateClient = typeof client<
  ApiV1AuthValidateReferralTokenCreateMutationResponse,
  ApiV1AuthValidateReferralTokenCreate201,
  ApiV1AuthValidateReferralTokenCreateMutationRequest
>
type ApiV1AuthValidateReferralTokenCreate = {
  data: ApiV1AuthValidateReferralTokenCreateMutationResponse
  error: ApiV1AuthValidateReferralTokenCreate201
  request: ApiV1AuthValidateReferralTokenCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthValidateReferralTokenCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthValidateReferralTokenCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthValidateReferralTokenCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_referral_token_invalid**Неверный формат реферального кода.* **user_not_found_by_referral_token**Пользователь не обнаружен по указанному реферальному коду.* **user_found_by_referral_token_is_blocked**Пользователь с указанным реферальным кодом заблокирован.
 * @summary Проверка реферального кода
 * @link /api/v1/auth/validate/referral-token/ */
export function useApiV1AuthValidateReferralTokenCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthValidateReferralTokenCreate["response"], ApiV1AuthValidateReferralTokenCreate["error"], ApiV1AuthValidateReferralTokenCreate["request"]>
    client?: ApiV1AuthValidateReferralTokenCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthValidateReferralTokenCreate["response"], ApiV1AuthValidateReferralTokenCreate["error"], ApiV1AuthValidateReferralTokenCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthValidateReferralTokenCreate["response"], ApiV1AuthValidateReferralTokenCreate["error"], ApiV1AuthValidateReferralTokenCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthValidateReferralTokenCreate["data"], ApiV1AuthValidateReferralTokenCreate["error"], ApiV1AuthValidateReferralTokenCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/validate/referral-token/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
