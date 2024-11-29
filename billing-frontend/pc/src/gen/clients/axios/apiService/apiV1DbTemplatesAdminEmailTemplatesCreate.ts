import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesCreate"

/**
 * @description .
 * @summary Список шаблонов email, создание нового шаблона
 * @link /api/v1/db_templates/admin/email-templates/ */
export async function apiV1DbTemplatesAdminEmailTemplatesCreate(
  data: ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest>({
    method: "post",
    url: `/api/v1/db_templates/admin/email-templates/`,
    data,
    ...options,
  })
  return res
}
