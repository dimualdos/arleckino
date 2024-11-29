import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminPromocodeReadQueryResponse, ApiV1ServiceAdminPromocodeReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeRead"

/**
 * @description .
 * @summary Просмотр данных промокода.
 * @link /api/v1/service/admin/promocode/:id/ */
export async function apiV1ServiceAdminPromocodeRead(
  { id }: ApiV1ServiceAdminPromocodeReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeReadQueryResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/promocode/${id}/`,
    ...options,
  })
  return res
}
