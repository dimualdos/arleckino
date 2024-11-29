import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminImageDeleteMutationResponse, ApiV1FaqAdminImageDeletePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminImageDelete"

/**
 * @description FormDataimage, faq (ID)Список сообщений **message_type**:* **faq_or_tmp_faq_id_must_be_specified**Значение для faq или tmp_faq_id должно быть указано.* **only_one_values_of_faq_or_tmp_faq_id_must_be_specified**Только одно из значений faq или tmp_faq_id должно быть указано.
 * @summary Создание и удаление фотографий для вопроса
 * @link /api/v1/faq/admin/image/:id/ */
export async function apiV1FaqAdminImageDelete(
  { id }: ApiV1FaqAdminImageDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminImageDeleteMutationResponse>> {
  const res = await client<ApiV1FaqAdminImageDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/faq/admin/image/${id}/`,
    ...options,
  })
  return res
}
