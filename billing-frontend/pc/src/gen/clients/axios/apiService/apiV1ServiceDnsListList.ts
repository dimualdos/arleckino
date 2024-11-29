import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceDnsListListQueryResponse, ApiV1ServiceDnsListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceDnsListList"

/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.* **dns_contains_russian_letters**Имя {} содержит русские буквы.
 * @summary Список ДНС, создание нового ДНС
 * @link /api/v1/service/dns/list/ */
export async function apiV1ServiceDnsListList(
  params?: ApiV1ServiceDnsListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceDnsListListQueryResponse>> {
  const res = await client<ApiV1ServiceDnsListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/dns/list/`,
    params,
    ...options,
  })
  return res
}
