import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqReadQueryResponse, ApiV1FaqReadPathParams } from "../../../models/ts/apiController/ApiV1FaqRead"

/**
 * @description .
 * @summary Просмотр вопроса.
 * @link /api/v1/faq/:id/ */
export async function apiV1FaqRead({ id }: ApiV1FaqReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqReadQueryResponse>> {
  const res = await client<ApiV1FaqReadQueryResponse>({
    method: "get",
    url: `/api/v1/faq/${id}/`,
    ...options,
  })
  return res
}
