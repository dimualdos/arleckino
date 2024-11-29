import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminMinistraPartialUpdateMutationRequest,
  ApiV1ServiceAdminMinistraPartialUpdateMutationResponse,
  ApiV1ServiceAdminMinistraPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraPartialUpdate"

/**
 * @link /api/v1/service/admin/ministra/:id/ */
export async function apiV1ServiceAdminMinistraPartialUpdate(
  { id }: ApiV1ServiceAdminMinistraPartialUpdatePathParams,
  data: ApiV1ServiceAdminMinistraPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraPartialUpdateMutationResponse, ApiV1ServiceAdminMinistraPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/service/admin/ministra/${id}/`,
    data,
    ...options,
  })
  return res
}
