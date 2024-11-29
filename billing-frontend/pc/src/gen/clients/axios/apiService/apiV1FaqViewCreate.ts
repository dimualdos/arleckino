import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqViewCreateMutationResponse, ApiV1FaqViewCreatePathParams } from "../../../models/ts/apiController/ApiV1FaqViewCreate"

/**
 * @description .
 * @summary Увеличить счетчик просмотров.
 * @link /api/v1/faq/:id/view/ */
export async function apiV1FaqViewCreate({ id }: ApiV1FaqViewCreatePathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqViewCreateMutationResponse>> {
  const res = await client<ApiV1FaqViewCreateMutationResponse>({
    method: "post",
    url: `/api/v1/faq/${id}/view/`,
    ...options,
  })
  return res
}
