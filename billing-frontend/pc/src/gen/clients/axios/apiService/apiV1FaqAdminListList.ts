import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminListListQueryResponse, ApiV1FaqAdminListListQueryParams } from "../../../models/ts/apiController/ApiV1FaqAdminListList"

/**
 * @description Параметры запроса:?is_published=true/false - фильтр опубликованных вопросов?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.* **order_should_be_a_positive_number**Поле order должно быть положительным числом.
 * @summary Список частых вопросов, создание нового вопроса.
 * @link /api/v1/faq/admin/list/ */
export async function apiV1FaqAdminListList(
  params?: ApiV1FaqAdminListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminListListQueryResponse>> {
  const res = await client<ApiV1FaqAdminListListQueryResponse>({
    method: "get",
    url: `/api/v1/faq/admin/list/`,
    params,
    ...options,
  })
  return res
}
