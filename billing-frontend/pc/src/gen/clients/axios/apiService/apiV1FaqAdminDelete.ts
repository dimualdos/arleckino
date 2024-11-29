import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminDeleteMutationResponse, ApiV1FaqAdminDeletePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminDelete"

/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export async function apiV1FaqAdminDelete({ id }: ApiV1FaqAdminDeletePathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqAdminDeleteMutationResponse>> {
  const res = await client<ApiV1FaqAdminDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/faq/admin/${id}/`,
    ...options,
  })
  return res
}
