import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceMinistraListListQueryResponse, ApiV1ServiceMinistraListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceMinistraListList"

/**
 * @link /api/v1/service/ministra/list/ */
export async function apiV1ServiceMinistraListList(
  params?: ApiV1ServiceMinistraListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceMinistraListListQueryResponse>> {
  const res = await client<ApiV1ServiceMinistraListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/ministra/list/`,
    params,
    ...options,
  })
  return res
}
