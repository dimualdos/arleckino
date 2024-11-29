import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileDeleteAccountCreateMutationRequest, ApiV1UserProfileDeleteAccountCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileDeleteAccountCreate"

/**
 * @description Список сообщений **message_type**:* **user_delete_account_token_invalid**Токен указан неверно.
 * @summary Удаление аккаунта пользователя
 * @link /api/v1/user/profile/delete-account */
export async function apiV1UserProfileDeleteAccountCreate(
  data: ApiV1UserProfileDeleteAccountCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileDeleteAccountCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileDeleteAccountCreateMutationResponse, ApiV1UserProfileDeleteAccountCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/delete-account`,
    data,
    ...options,
  })
  return res
}
