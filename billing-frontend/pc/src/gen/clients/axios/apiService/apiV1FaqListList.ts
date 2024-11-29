import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqListListQueryResponse, ApiV1FaqListListQueryParams } from "../../../models/ts/apiController/ApiV1FaqListList"

/**
 * @description Параметры запроса:?search= - Поиск по названию?tag={tag_id} - Поиск по ID тега?language={language_id} - Поиск по ID языка?ordering=[-]order|number_of_views - Сортировка по указанному полю, ordering=-order - в обратном порядке
 * @summary Список вопросов.
 * @link /api/v1/faq/list/ */
export async function apiV1FaqListList(params?: ApiV1FaqListListQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1FaqListListQueryResponse>> {
  const res = await client<ApiV1FaqListListQueryResponse>({
    method: "get",
    url: `/api/v1/faq/list/`,
    params,
    ...options,
  })
  return res
}
