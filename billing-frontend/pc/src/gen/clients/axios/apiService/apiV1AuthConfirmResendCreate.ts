import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthConfirmResendCreateMutationRequest, ApiV1AuthConfirmResendCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthConfirmResendCreate"

/**
 * @description Список сообщений **message_type**:* **user_already_verified**Учетная запись пользователя уже подтверждена.* **confirmation_resend_timeout**Не истек таймаут повторной отправки информации для подтверждения e-mail адреса.
 * @summary Повторная отправка информации для подтверждения e-mail адреса
 * @link /api/v1/auth/confirm/resend/ */
export async function apiV1AuthConfirmResendCreate(
  data: ApiV1AuthConfirmResendCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthConfirmResendCreateMutationResponse>> {
  const res = await client<ApiV1AuthConfirmResendCreateMutationResponse, ApiV1AuthConfirmResendCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/confirm/resend/`,
    data,
    ...options,
  })
  return res
}
