import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesImagesCreate"

/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона email
 * @link /api/v1/db_templates/admin/email-templates/images/ */
export async function apiV1DbTemplatesAdminEmailTemplatesImagesCreate(
  data?: ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest>({
    method: "post",
    url: `/api/v1/db_templates/admin/email-templates/images/`,
    data,
    ...options,
  })
  return res
}
