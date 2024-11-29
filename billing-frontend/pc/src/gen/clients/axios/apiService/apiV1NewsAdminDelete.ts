import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminDeleteMutationResponse, ApiV1NewsAdminDeletePathParams } from "../../../models/ts/apiController/ApiV1NewsAdminDelete"

/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export async function apiV1NewsAdminDelete({ id }: ApiV1NewsAdminDeletePathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1NewsAdminDeleteMutationResponse>> {
  const res = await client<ApiV1NewsAdminDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/news/admin/${id}/`,
    ...options,
  })
  return res
}
