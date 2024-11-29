import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiExternalV1DnsListListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1DnsListList"

/**
 * @link /api_external/v1/dns-list/ */
export async function apiExternalV1DnsListList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiExternalV1DnsListListQueryResponse>> {
  const res = await client<ApiExternalV1DnsListListQueryResponse>({
    method: "get",
    url: `/api_external/v1/dns-list/`,
    ...options,
  })
  return res
}
