import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse, ApiV1DbTemplatesAdminEmailTemplatesReadPathParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesRead"

/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export async function apiV1DbTemplatesAdminEmailTemplatesRead(
  { id }: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/email-templates/${id}/`,
    ...options,
  })
  return res
}
