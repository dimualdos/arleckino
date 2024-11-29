import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDnsUpdateMutationRequest, ApiV1ServiceDnsUpdateMutationResponse, ApiV1ServiceDnsUpdatePathParams } from "../../../models/ts/apiController/ApiV1ServiceDnsUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export async function apiV1ServiceDnsUpdate(
  { id }: ApiV1ServiceDnsUpdatePathParams,
  data: ApiV1ServiceDnsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDnsUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceDnsUpdateMutationResponse, ApiV1ServiceDnsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/service/dns/${id}/`,
    data,
    ...options,
  })
  return res
}
