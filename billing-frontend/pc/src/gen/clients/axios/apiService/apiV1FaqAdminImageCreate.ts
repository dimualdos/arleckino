import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminImageCreateMutationRequest, ApiV1FaqAdminImageCreateMutationResponse } from "../../../models/ts/apiController/ApiV1FaqAdminImageCreate"

/**
 * @description FormDataimage, faq (ID)Список сообщений **message_type**:* **faq_or_tmp_faq_id_must_be_specified**Значение для faq или tmp_faq_id должно быть указано.* **only_one_values_of_faq_or_tmp_faq_id_must_be_specified**Только одно из значений faq или tmp_faq_id должно быть указано.
 * @summary Создание и удаление фотографий для вопроса
 * @link /api/v1/faq/admin/image/ */
export async function apiV1FaqAdminImageCreate(
  data?: ApiV1FaqAdminImageCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminImageCreateMutationResponse>> {
  const res = await client<ApiV1FaqAdminImageCreateMutationResponse, ApiV1FaqAdminImageCreateMutationRequest>({
    method: "post",
    url: `/api/v1/faq/admin/image/`,
    data,
    ...options,
  })
  return res
}
