import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesDeletePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesDelete"

/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export async function apiV1DbTemplatesAdminEmailTemplatesDelete(
  { id }: ApiV1DbTemplatesAdminEmailTemplatesDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/db_templates/admin/email-templates/${id}/`,
    ...options,
  })
  return res
}
