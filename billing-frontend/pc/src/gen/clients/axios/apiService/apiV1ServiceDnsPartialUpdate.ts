import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceDnsPartialUpdateMutationRequest,
  ApiV1ServiceDnsPartialUpdateMutationResponse,
  ApiV1ServiceDnsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceDnsPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export async function apiV1ServiceDnsPartialUpdate(
  { id }: ApiV1ServiceDnsPartialUpdatePathParams,
  data: ApiV1ServiceDnsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDnsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceDnsPartialUpdateMutationResponse, ApiV1ServiceDnsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/service/dns/${id}/`,
    data,
    ...options,
  })
  return res
}
