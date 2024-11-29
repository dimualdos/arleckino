import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthTokenRefreshCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthTokenRefreshCreate"

/**
 * @description .
 * @summary Продление срока действия токена
 * @link /api/v1/auth/token/refresh/ */
export async function apiV1AuthTokenRefreshCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1AuthTokenRefreshCreateMutationResponse>> {
  const res = await client<ApiV1AuthTokenRefreshCreateMutationResponse>({
    method: "post",
    url: `/api/v1/auth/token/refresh/`,
    ...options,
  })
  return res
}
