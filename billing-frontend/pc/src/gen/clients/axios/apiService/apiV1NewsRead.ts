import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsReadQueryResponse, ApiV1NewsReadPathParams } from "../../../models/ts/apiController/ApiV1NewsRead"

/**
 * @description .
 * @summary Просмотр новости.
 * @link /api/v1/news/:id/ */
export async function apiV1NewsRead({ id }: ApiV1NewsReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1NewsReadQueryResponse>> {
  const res = await client<ApiV1NewsReadQueryResponse>({
    method: "get",
    url: `/api/v1/news/${id}/`,
    ...options,
  })
  return res
}
