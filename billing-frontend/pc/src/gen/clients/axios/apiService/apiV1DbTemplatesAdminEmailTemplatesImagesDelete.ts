import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesImagesDelete"

/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона email
 * @link /api/v1/db_templates/admin/email-templates/images/:id/ */
export async function apiV1DbTemplatesAdminEmailTemplatesImagesDelete(
  { id }: ApiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/db_templates/admin/email-templates/images/${id}/`,
    ...options,
  })
  return res
}
