import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse,
  ApiV1DbTemplatesAdminTemplatesImagesDeletePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesImagesDelete"

/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона
 * @link /api/v1/db_templates/admin/templates/images/:id/ */
export async function apiV1DbTemplatesAdminTemplatesImagesDelete(
  { id }: ApiV1DbTemplatesAdminTemplatesImagesDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/db_templates/admin/templates/images/${id}/`,
    ...options,
  })
  return res
}
