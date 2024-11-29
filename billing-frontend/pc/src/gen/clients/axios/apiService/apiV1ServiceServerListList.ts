import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceServerListListQueryResponse, ApiV1ServiceServerListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceServerListList"

/**
 * @link /api/v1/service/server/list/ */
export async function apiV1ServiceServerListList(
  params?: ApiV1ServiceServerListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceServerListListQueryResponse>> {
  const res = await client<ApiV1ServiceServerListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/server/list/`,
    params,
    ...options,
  })
  return res
}
