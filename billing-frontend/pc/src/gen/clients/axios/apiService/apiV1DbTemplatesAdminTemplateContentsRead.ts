import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse,
  ApiV1DbTemplatesAdminTemplateContentsReadPathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsRead"

/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export async function apiV1DbTemplatesAdminTemplateContentsRead(
  { id }: ApiV1DbTemplatesAdminTemplateContentsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/template-contents/${id}/`,
    ...options,
  })
  return res
}
