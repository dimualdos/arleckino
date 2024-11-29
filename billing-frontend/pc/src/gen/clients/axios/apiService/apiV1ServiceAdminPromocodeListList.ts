import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminPromocodeListListQueryResponse, ApiV1ServiceAdminPromocodeListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeListList"

/**
 * @description Параметры фильтрации списка промокодов:- promocode_type - тип промокода, возможные значения amount/percent- is_active - активность промокода, возможные значения true/false- code - фраза для регистронезависимого поиска в поле code
 * @summary Список промокодов, создание нового промокода.
 * @link /api/v1/service/admin/promocode/list/ */
export async function apiV1ServiceAdminPromocodeListList(
  params?: ApiV1ServiceAdminPromocodeListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeListListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeListListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/promocode/list/`,
    params,
    ...options,
  })
  return res
}
