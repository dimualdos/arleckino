import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserBlockReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserBlockRead"

/**
 * @description Апи представление для получения информации о нынешней блокировки активного пользователя
 * @link /api/v1/user/block/ */
export async function apiV1UserBlockRead(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserBlockReadQueryResponse>> {
  const res = await client<ApiV1UserBlockReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/block/`,
    ...options,
  })
  return res
}
