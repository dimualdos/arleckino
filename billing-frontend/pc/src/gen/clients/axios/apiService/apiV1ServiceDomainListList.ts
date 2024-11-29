import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDomainListListQueryResponse, ApiV1ServiceDomainListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceDomainListList"

/**
 * @link /api/v1/service/domain/list/ */
export async function apiV1ServiceDomainListList(
  params?: ApiV1ServiceDomainListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDomainListListQueryResponse>> {
  const res = await client<ApiV1ServiceDomainListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/domain/list/`,
    params,
    ...options,
  })
  return res
}
