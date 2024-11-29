import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminMinistraDeleteMutationResponse, ApiV1ServiceAdminMinistraDeletePathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraDelete"

/**
 * @link /api/v1/service/admin/ministra/:id/ */
export async function apiV1ServiceAdminMinistraDelete(
  { id }: ApiV1ServiceAdminMinistraDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/admin/ministra/${id}/`,
    ...options,
  })
  return res
}
