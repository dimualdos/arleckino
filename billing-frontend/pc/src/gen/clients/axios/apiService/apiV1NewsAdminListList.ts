import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminListListQueryResponse, ApiV1NewsAdminListListQueryParams } from "../../../models/ts/apiController/ApiV1NewsAdminListList"

/**
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Список новостей, создание новой новости.
 * @link /api/v1/news/admin/list/ */
export async function apiV1NewsAdminListList(
  params?: ApiV1NewsAdminListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1NewsAdminListListQueryResponse>> {
  const res = await client<ApiV1NewsAdminListListQueryResponse>({
    method: "get",
    url: `/api/v1/news/admin/list/`,
    params,
    ...options,
  })
  return res
}
