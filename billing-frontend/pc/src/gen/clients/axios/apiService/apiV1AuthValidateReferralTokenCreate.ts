import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthValidateReferralTokenCreateMutationRequest, ApiV1AuthValidateReferralTokenCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthValidateReferralTokenCreate"

/**
 * @description Список сообщений **message_type**:* **user_referral_token_invalid**Неверный формат реферального кода.* **user_not_found_by_referral_token**Пользователь не обнаружен по указанному реферальному коду.* **user_found_by_referral_token_is_blocked**Пользователь с указанным реферальным кодом заблокирован.
 * @summary Проверка реферального кода
 * @link /api/v1/auth/validate/referral-token/ */
export async function apiV1AuthValidateReferralTokenCreate(
  data: ApiV1AuthValidateReferralTokenCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthValidateReferralTokenCreateMutationResponse>> {
  const res = await client<ApiV1AuthValidateReferralTokenCreateMutationResponse, ApiV1AuthValidateReferralTokenCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/validate/referral-token/`,
    data,
    ...options,
  })
  return res
}
