import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserMetaListQueryResponse } from "../../../models/ts/apiController/ApiV1UserMetaList"

/**
 * @link /api/v1/user/meta/ */
export async function apiV1UserMetaList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserMetaListQueryResponse>> {
  const res = await client<ApiV1UserMetaListQueryResponse>({
    method: "get",
    url: `/api/v1/user/meta/`,
    ...options,
  })
  return res
}
