import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesImagesCreate"

/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона
 * @link /api/v1/db_templates/admin/templates/images/ */
export async function apiV1DbTemplatesAdminTemplatesImagesCreate(
  data: ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse, ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest>({
    method: "post",
    url: `/api/v1/db_templates/admin/templates/images/`,
    data,
    ...options,
  })
  return res
}
