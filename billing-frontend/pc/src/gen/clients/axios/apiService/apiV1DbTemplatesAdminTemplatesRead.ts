import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesAdminTemplatesReadQueryResponse, ApiV1DbTemplatesAdminTemplatesReadPathParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesRead"

/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export async function apiV1DbTemplatesAdminTemplatesRead(
  { id }: ApiV1DbTemplatesAdminTemplatesReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesReadQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesReadQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/templates/${id}/`,
    ...options,
  })
  return res
}
