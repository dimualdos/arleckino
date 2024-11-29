import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminTagsListQueryResponse } from "../../../models/ts/apiController/ApiV1FaqAdminTagsList"

/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/admin/tags/ */
export async function apiV1FaqAdminTagsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqAdminTagsListQueryResponse>> {
  const res = await client<ApiV1FaqAdminTagsListQueryResponse>({
    method: "get",
    url: `/api/v1/faq/admin/tags/`,
    ...options,
  })
  return res
}
