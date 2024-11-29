import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1DbTemplatesLanguagesListQueryResponse } from "../../../models/ts/apiController/ApiV1DbTemplatesLanguagesList"

/**
 * @description .
 * @summary Список языков для шаблонов
 * @link /api/v1/db_templates/languages/ */
export async function apiV1DbTemplatesLanguagesList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1DbTemplatesLanguagesListQueryResponse>> {
  const res = await client<ApiV1DbTemplatesLanguagesListQueryResponse>({
    method: "get",
    url: `/api/v1/db_templates/languages/`,
    ...options,
  })
  return res
}
