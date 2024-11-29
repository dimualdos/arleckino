import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminTagsDeleteMutationResponse, ApiV1FaqAdminTagsDeletePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminTagsDelete"

/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export async function apiV1FaqAdminTagsDelete(
  { id }: ApiV1FaqAdminTagsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminTagsDeleteMutationResponse>> {
  const res = await client<ApiV1FaqAdminTagsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/faq/admin/tags/${id}/`,
    ...options,
  })
  return res
}
