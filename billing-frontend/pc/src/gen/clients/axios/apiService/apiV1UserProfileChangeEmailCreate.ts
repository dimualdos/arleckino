import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileChangeEmailCreateMutationRequest, ApiV1UserProfileChangeEmailCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailCreate"

/**
 * @description Список сообщений **message_type**:* **user_change_email_token_invalid**Токен указан неверно.
 * @summary Изменение email пользователя
 * @link /api/v1/user/profile/change-email */
export async function apiV1UserProfileChangeEmailCreate(
  data: ApiV1UserProfileChangeEmailCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileChangeEmailCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileChangeEmailCreateMutationResponse, ApiV1UserProfileChangeEmailCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/change-email`,
    data,
    ...options,
  })
  return res
}
