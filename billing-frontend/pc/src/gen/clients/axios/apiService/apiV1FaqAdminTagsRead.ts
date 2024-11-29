import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminTagsReadQueryResponse, ApiV1FaqAdminTagsReadPathParams } from "../../../models/ts/apiController/ApiV1FaqAdminTagsRead"

/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export async function apiV1FaqAdminTagsRead({ id }: ApiV1FaqAdminTagsReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqAdminTagsReadQueryResponse>> {
  const res = await client<ApiV1FaqAdminTagsReadQueryResponse>({
    method: "get",
    url: `/api/v1/faq/admin/tags/${id}/`,
    ...options,
  })
  return res
}
