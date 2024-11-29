import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1FaqAdminTagsPartialUpdateMutationRequest,
  ApiV1FaqAdminTagsPartialUpdateMutationResponse,
  ApiV1FaqAdminTagsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1FaqAdminTagsPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export async function apiV1FaqAdminTagsPartialUpdate(
  { id }: ApiV1FaqAdminTagsPartialUpdatePathParams,
  data: ApiV1FaqAdminTagsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminTagsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1FaqAdminTagsPartialUpdateMutationResponse, ApiV1FaqAdminTagsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/faq/admin/tags/${id}/`,
    data,
    ...options,
  })
  return res
}
