import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse, ApiV1DbTemplatesAdminEmailTemplatesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesList"

/**
 * @description .
 * @summary Список шаблонов email, создание нового шаблона
 * @link /api/v1/db_templates/admin/email-templates/ */
export async function apiV1DbTemplatesAdminEmailTemplatesList(
  params?: ApiV1DbTemplatesAdminEmailTemplatesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/email-templates/`,
    params,
    ...options,
  })
  return res
}
