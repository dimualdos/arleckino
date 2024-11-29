import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesAdminLanguagesListQueryResponse, ApiV1DbTemplatesAdminLanguagesListQueryParams } from "../../../models/ts/apiController/ApiV1DbTemplatesAdminLanguagesList"

/**
 * @description .
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/admin/languages/ */
export async function apiV1DbTemplatesAdminLanguagesList(
  params?: ApiV1DbTemplatesAdminLanguagesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminLanguagesListQueryResponse>> {
  const res = await client<ApiV1DbTemplatesAdminLanguagesListQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/admin/languages/`,
    params,
    ...options,
  })
  return res
}
