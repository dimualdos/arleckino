import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsListListQueryResponse, ApiV1NewsListListQueryParams } from "../../../models/ts/apiController/ApiV1NewsListList"

/**
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названию
 * @summary Список новостей.
 * @link /api/v1/news/list/ */
export async function apiV1NewsListList(params?: ApiV1NewsListListQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1NewsListListQueryResponse>> {
  const res = await client<ApiV1NewsListListQueryResponse>({
    method: "get",
    url: `/api/v1/news/list/`,
    params,
    ...options,
  })
  return res
}
