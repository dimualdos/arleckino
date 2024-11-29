import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminTagsCreateMutationRequest, ApiV1FaqAdminTagsCreateMutationResponse } from "../../../models/ts/apiController/ApiV1FaqAdminTagsCreate"

/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/admin/tags/ */
export async function apiV1FaqAdminTagsCreate(
  data: ApiV1FaqAdminTagsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminTagsCreateMutationResponse>> {
  const res = await client<ApiV1FaqAdminTagsCreateMutationResponse, ApiV1FaqAdminTagsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/faq/admin/tags/`,
    data,
    ...options,
  })
  return res
}
