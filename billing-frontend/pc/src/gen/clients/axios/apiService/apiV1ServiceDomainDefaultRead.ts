import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDomainDefaultReadQueryResponse } from "../../../models/ts/apiController/ApiV1ServiceDomainDefaultRead"

/**
 * @link /api/v1/service/domain/default/ */
export async function apiV1ServiceDomainDefaultRead(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1ServiceDomainDefaultReadQueryResponse>> {
  const res = await client<ApiV1ServiceDomainDefaultReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/domain/default/`,
    ...options,
  })
  return res
}
