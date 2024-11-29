import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserBlockListListQueryResponse, ApiV1UserBlockListListQueryParams } from "../../../models/ts/apiController/ApiV1UserBlockListList"

/**
 * @description Апи представление выборки записей о блокировках активного пользователя
 * @link /api/v1/user/block/list */
export async function apiV1UserBlockListList(
  params?: ApiV1UserBlockListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserBlockListListQueryResponse>> {
  const res = await client<ApiV1UserBlockListListQueryResponse>({
    method: "get",
    url: `/api/v1/user/block/list`,
    params,
    ...options,
  })
  return res
}
