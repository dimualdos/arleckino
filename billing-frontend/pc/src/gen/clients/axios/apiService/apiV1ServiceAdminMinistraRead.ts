import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminMinistraReadQueryResponse, ApiV1ServiceAdminMinistraReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraRead"

/**
 * @link /api/v1/service/admin/ministra/:id/ */
export async function apiV1ServiceAdminMinistraRead(
  { id }: ApiV1ServiceAdminMinistraReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraReadQueryResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/ministra/${id}/`,
    ...options,
  })
  return res
}
