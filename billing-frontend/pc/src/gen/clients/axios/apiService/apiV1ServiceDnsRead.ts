import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDnsReadQueryResponse, ApiV1ServiceDnsReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceDnsRead"

/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export async function apiV1ServiceDnsRead({ id }: ApiV1ServiceDnsReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1ServiceDnsReadQueryResponse>> {
  const res = await client<ApiV1ServiceDnsReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/dns/${id}/`,
    ...options,
  })
  return res
}
