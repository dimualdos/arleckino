import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export async function apiV1DbTemplatesAdminTemplateContentsPartialUpdate(
  { id }: ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams,
  data: ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse, ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/db_templates/admin/template-contents/${id}/`,
    data,
    ...options,
  })
  return res
}
