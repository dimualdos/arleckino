import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDnsListCreateMutationRequest, ApiV1ServiceDnsListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceDnsListCreate"

/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.* **dns_contains_russian_letters**Имя {} содержит русские буквы.
 * @summary Список ДНС, создание нового ДНС
 * @link /api/v1/service/dns/list/ */
export async function apiV1ServiceDnsListCreate(
  data: ApiV1ServiceDnsListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDnsListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceDnsListCreateMutationResponse, ApiV1ServiceDnsListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/dns/list/`,
    data,
    ...options,
  })
  return res
}
