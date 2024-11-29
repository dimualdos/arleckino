import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export async function apiV1DbTemplatesAdminEmailTemplatesPartialUpdate(
  { id }: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams,
  data: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/db_templates/admin/email-templates/${id}/`,
    data,
    ...options,
  })
  return res
}
