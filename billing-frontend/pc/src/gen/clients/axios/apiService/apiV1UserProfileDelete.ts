import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileDeleteMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileDelete"

/**
 * @description .
 * @summary Отправка запроса на удаление аккаунта
 * @link /api/v1/user/profile/ */
export async function apiV1UserProfileDelete(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserProfileDeleteMutationResponse>> {
  const res = await client<ApiV1UserProfileDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/user/profile/`,
    ...options,
  })
  return res
}
