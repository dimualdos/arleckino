import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminMinistraUpdateMutationRequest,
  ApiV1ServiceAdminMinistraUpdateMutationResponse,
  ApiV1ServiceAdminMinistraUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraUpdate"

/**
 * @link /api/v1/service/admin/ministra/:id/ */
export async function apiV1ServiceAdminMinistraUpdate(
  { id }: ApiV1ServiceAdminMinistraUpdatePathParams,
  data: ApiV1ServiceAdminMinistraUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraUpdateMutationResponse, ApiV1ServiceAdminMinistraUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/service/admin/ministra/${id}/`,
    data,
    ...options,
  })
  return res
}
