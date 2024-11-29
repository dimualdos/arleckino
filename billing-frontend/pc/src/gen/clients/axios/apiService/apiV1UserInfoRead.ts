import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserInfoReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserInfoRead"

/**
 * @description .
 * @summary Получение информации о текущем пользователе.
 * @link /api/v1/user/info/ */
export async function apiV1UserInfoRead(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserInfoReadQueryResponse>> {
  const res = await client<ApiV1UserInfoReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/info/`,
    ...options,
  })
  return res
}
