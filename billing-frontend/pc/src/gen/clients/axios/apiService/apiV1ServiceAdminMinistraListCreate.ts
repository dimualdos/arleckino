import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminMinistraListCreateMutationRequest, ApiV1ServiceAdminMinistraListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraListCreate"

/**
 * @link /api/v1/service/admin/ministra/list/ */
export async function apiV1ServiceAdminMinistraListCreate(
  data: ApiV1ServiceAdminMinistraListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraListCreateMutationResponse, ApiV1ServiceAdminMinistraListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/admin/ministra/list/`,
    data,
    ...options,
  })
  return res
}
