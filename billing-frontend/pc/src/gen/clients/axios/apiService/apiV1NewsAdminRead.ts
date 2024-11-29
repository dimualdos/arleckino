import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminReadQueryResponse, ApiV1NewsAdminReadPathParams } from "../../../models/ts/apiController/ApiV1NewsAdminRead"

/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export async function apiV1NewsAdminRead({ id }: ApiV1NewsAdminReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1NewsAdminReadQueryResponse>> {
  const res = await client<ApiV1NewsAdminReadQueryResponse>({
    method: "get",
    url: `/api/v1/news/admin/${id}/`,
    ...options,
  })
  return res
}
