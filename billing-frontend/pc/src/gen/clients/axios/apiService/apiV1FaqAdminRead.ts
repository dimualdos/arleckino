import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminReadQueryResponse, ApiV1FaqAdminReadPathParams } from "../../../models/ts/apiController/ApiV1FaqAdminRead"

/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export async function apiV1FaqAdminRead({ id }: ApiV1FaqAdminReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqAdminReadQueryResponse>> {
  const res = await client<ApiV1FaqAdminReadQueryResponse>({
    method: "get",
    url: `/api/v1/faq/admin/${id}/`,
    ...options,
  })
  return res
}
