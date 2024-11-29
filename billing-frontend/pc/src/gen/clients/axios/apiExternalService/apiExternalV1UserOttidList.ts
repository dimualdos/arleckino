import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1UserOttidListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1UserOttidList"

/**
 * @link /api_external/v1/user/ottid/ */
export async function apiExternalV1UserOttidList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiExternalV1UserOttidListQueryResponse>> {
  const res = await client<ApiExternalV1UserOttidListQueryResponse>({
    method: "get",
    url: `/api_external/v1/user/ottid/`,
    ...options,
  })
  return res
}
