import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminTagsUpdateMutationRequest, ApiV1FaqAdminTagsUpdateMutationResponse, ApiV1FaqAdminTagsUpdatePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminTagsUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export async function apiV1FaqAdminTagsUpdate(
  { id }: ApiV1FaqAdminTagsUpdatePathParams,
  data: ApiV1FaqAdminTagsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminTagsUpdateMutationResponse>> {
  const res = await client<ApiV1FaqAdminTagsUpdateMutationResponse, ApiV1FaqAdminTagsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/faq/admin/tags/${id}/`,
    data,
    ...options,
  })
  return res
}
