import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminImageCreateMutationRequest, ApiV1NewsAdminImageCreateMutationResponse } from "../../../models/ts/apiController/ApiV1NewsAdminImageCreate"

/**
 * @description FormDataimage, news (ID)Список сообщений **message_type**:* **news_or_tmp_news_id_must_be_specified**Значение для news или tmp_news_id должно быть указано.* **only_one_values_of_news_or_tmp_news_id_must_be_specified**Только одно из значений news или tmp_news_id должно быть указано.
 * @summary Создание и удаление фотографий для новости
 * @link /api/v1/news/admin/image/ */
export async function apiV1NewsAdminImageCreate(
  data?: ApiV1NewsAdminImageCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1NewsAdminImageCreateMutationResponse>> {
  const res = await client<ApiV1NewsAdminImageCreateMutationResponse, ApiV1NewsAdminImageCreateMutationRequest>({
    method: "post",
    url: `/api/v1/news/admin/image/`,
    data,
    ...options,
  })
  return res
}
