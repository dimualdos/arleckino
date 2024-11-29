import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserFrontendLanguageCreateMutationRequest, ApiV1UserFrontendLanguageCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserFrontendLanguageCreate"

/**
 * @description Список сообщений **message_type**:* **db_template_language_not_found**Язык шаблонов с указанным кодом {0} не обнаружен.* **user_frontend_language_is_equal_to_current**Язык просмотра сайта с указанным кодом {0} совпадает с текущим {1}.
 * @summary Изменение языка просмотра сайта
 * @link /api/v1/user/frontend-language/ */
export async function apiV1UserFrontendLanguageCreate(
  data: ApiV1UserFrontendLanguageCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserFrontendLanguageCreateMutationResponse>> {
  const res = await client<ApiV1UserFrontendLanguageCreateMutationResponse, ApiV1UserFrontendLanguageCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/frontend-language/`,
    data,
    ...options,
  })
  return res
}
