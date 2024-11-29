import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminMinistraListListQueryResponse, ApiV1ServiceAdminMinistraListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraListList"

/**
 * @link /api/v1/service/admin/ministra/list/ */
export async function apiV1ServiceAdminMinistraListList(
  params?: ApiV1ServiceAdminMinistraListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraListListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/ministra/list/`,
    params,
    ...options,
  })
  return res
}
