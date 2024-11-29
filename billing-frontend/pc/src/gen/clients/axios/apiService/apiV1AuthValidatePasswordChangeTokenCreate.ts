import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest,
  ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1AuthValidatePasswordChangeTokenCreate"

/**
 * @description .
 * @summary Проверка токена подтверждения сброса пароля
 * @link /api/v1/auth/validate/password-change-token/ */
export async function apiV1AuthValidatePasswordChangeTokenCreate(
  data: ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse>> {
  const res = await client<ApiV1AuthValidatePasswordChangeTokenCreateMutationResponse, ApiV1AuthValidatePasswordChangeTokenCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/validate/password-change-token/`,
    data,
    ...options,
  })
  return res
}
