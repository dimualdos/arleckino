import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthValidateEmailCreateMutationRequest, ApiV1AuthValidateEmailCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthValidateEmailCreate"

/**
 * @description Список сообщений **message_type**:* **user_already_exists**Пользователь с таким e-mail адресом уже зарегистрирован.
 * @summary Проверка адреса e-mail
 * @link /api/v1/auth/validate/email/ */
export async function apiV1AuthValidateEmailCreate(
  data: ApiV1AuthValidateEmailCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthValidateEmailCreateMutationResponse>> {
  const res = await client<ApiV1AuthValidateEmailCreateMutationResponse, ApiV1AuthValidateEmailCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/validate/email/`,
    data,
    ...options,
  })
  return res
}
