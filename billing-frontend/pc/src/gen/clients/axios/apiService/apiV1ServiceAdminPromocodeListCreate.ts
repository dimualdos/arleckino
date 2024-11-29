import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminPromocodeListCreateMutationRequest, ApiV1ServiceAdminPromocodeListCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeListCreate"

/**
 * @description Параметры фильтрации списка промокодов:- promocode_type - тип промокода, возможные значения amount/percent- is_active - активность промокода, возможные значения true/false- code - фраза для регистронезависимого поиска в поле code
 * @summary Список промокодов, создание нового промокода.
 * @link /api/v1/service/admin/promocode/list/ */
export async function apiV1ServiceAdminPromocodeListCreate(
  data: ApiV1ServiceAdminPromocodeListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeListCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeListCreateMutationResponse, ApiV1ServiceAdminPromocodeListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/admin/promocode/list/`,
    data,
    ...options,
  })
  return res
}
