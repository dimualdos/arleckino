import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDnsDeleteMutationResponse, ApiV1ServiceDnsDeletePathParams } from "../../../models/ts/apiController/ApiV1ServiceDnsDelete"

/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export async function apiV1ServiceDnsDelete(
  { id }: ApiV1ServiceDnsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDnsDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceDnsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/dns/${id}/`,
    ...options,
  })
  return res
}
