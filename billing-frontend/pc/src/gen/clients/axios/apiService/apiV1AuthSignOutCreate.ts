import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthSignOutCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthSignOutCreate"

/**
 * @description Список сообщений **message_type**:* **user_is_not_authenticated**Пользователь не авторизован.
 * @summary Выход пользователя
 * @link /api/v1/auth/sign-out/ */
export async function apiV1AuthSignOutCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1AuthSignOutCreateMutationResponse>> {
  const res = await client<ApiV1AuthSignOutCreateMutationResponse>({
    method: "post",
    url: `/api/v1/auth/sign-out/`,
    ...options,
  })
  return res
}
