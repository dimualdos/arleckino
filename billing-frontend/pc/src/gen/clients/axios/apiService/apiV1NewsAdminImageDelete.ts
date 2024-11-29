import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminImageDeleteMutationResponse, ApiV1NewsAdminImageDeletePathParams } from "../../../models/ts/apiController/ApiV1NewsAdminImageDelete"

/**
 * @description FormDataimage, news (ID)Список сообщений **message_type**:* **news_or_tmp_news_id_must_be_specified**Значение для news или tmp_news_id должно быть указано.* **only_one_values_of_news_or_tmp_news_id_must_be_specified**Только одно из значений news или tmp_news_id должно быть указано.
 * @summary Создание и удаление фотографий для новости
 * @link /api/v1/news/admin/image/:id/ */
export async function apiV1NewsAdminImageDelete(
  { id }: ApiV1NewsAdminImageDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1NewsAdminImageDeleteMutationResponse>> {
  const res = await client<ApiV1NewsAdminImageDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/news/admin/image/${id}/`,
    ...options,
  })
  return res
}
