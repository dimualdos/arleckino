import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqTagsListQueryResponse } from "../../../models/ts/apiController/ApiV1FaqTagsList"

/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/tags/ */
export async function apiV1FaqTagsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqTagsListQueryResponse>> {
  const res = await client<ApiV1FaqTagsListQueryResponse>({
    method: "get",
    url: `/api/v1/faq/tags/`,
    ...options,
  })
  return res
}
