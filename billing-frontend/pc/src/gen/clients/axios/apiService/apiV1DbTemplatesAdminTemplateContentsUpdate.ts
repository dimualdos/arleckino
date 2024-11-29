import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsUpdate"

/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export async function apiV1DbTemplatesAdminTemplateContentsUpdate(
  { id }: ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams,
  data: ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse, ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/db_templates/admin/template-contents/${id}/`,
    data,
    ...options,
  })
  return res
}
