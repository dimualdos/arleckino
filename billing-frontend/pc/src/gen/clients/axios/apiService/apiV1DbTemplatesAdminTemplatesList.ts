import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesAdminTemplatesListQueryResponse, ApiV1DbTemplatesAdminTemplatesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesList"

/**
 * @description .
 * @summary Список шаблонов
 * @link /api/v1/db_templates/admin/templates/ */
export async function apiV1DbTemplatesAdminTemplatesList(
  params?: ApiV1DbTemplatesAdminTemplatesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesListQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesListQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/templates/`,
    params,
    ...options,
  })
  return res
}
