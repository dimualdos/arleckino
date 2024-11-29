import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesUpdate"

/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export async function apiV1DbTemplatesAdminEmailTemplatesUpdate(
  { id }: ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams,
  data: ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/db_templates/admin/email-templates/${id}/`,
    data,
    ...options,
  })
  return res
}
