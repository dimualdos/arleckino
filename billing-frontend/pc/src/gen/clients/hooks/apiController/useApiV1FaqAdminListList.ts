import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqAdminListListQueryResponse, ApiV1FaqAdminListListQueryParams } from "../../../models/ts/apiController/ApiV1FaqAdminListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqAdminListListClient = typeof client<ApiV1FaqAdminListListQueryResponse, never, never>
type ApiV1FaqAdminListList = {
  data: ApiV1FaqAdminListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1FaqAdminListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminListListClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminListListClient>>
  }
}
export const apiV1FaqAdminListListQueryKey = (params?: ApiV1FaqAdminListList["queryParams"]) => [{ url: "/api/v1/faq/admin/list/" }, ...(params ? [params] : [])] as const
export type ApiV1FaqAdminListListQueryKey = ReturnType<typeof apiV1FaqAdminListListQueryKey>
export function apiV1FaqAdminListListQueryOptions<TData = ApiV1FaqAdminListList["response"], TQueryData = ApiV1FaqAdminListList["response"]>(
  params?: ApiV1FaqAdminListList["queryParams"],
  options: ApiV1FaqAdminListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqAdminListList["response"], ApiV1FaqAdminListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqAdminListList["data"], ApiV1FaqAdminListList["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Параметры запроса:?is_published=true/false - фильтр опубликованных вопросов?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.* **order_should_be_a_positive_number**Поле order должно быть положительным числом.
 * @summary Список частых вопросов, создание нового вопроса.
 * @link /api/v1/faq/admin/list/ */
export function useApiV1FaqAdminListList<TData = ApiV1FaqAdminListList["response"], TQueryData = ApiV1FaqAdminListList["response"], TQueryKey extends QueryKey = ApiV1FaqAdminListListQueryKey>(
  params?: ApiV1FaqAdminListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqAdminListList["response"], ApiV1FaqAdminListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqAdminListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminListListQueryKey(params)
  const query = useQuery<ApiV1FaqAdminListList["data"], ApiV1FaqAdminListList["error"], TData, any>({
    ...apiV1FaqAdminListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqAdminListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqAdminListListInfiniteQueryKey = (params?: ApiV1FaqAdminListList["queryParams"]) => [{ url: "/api/v1/faq/admin/list/" }, ...(params ? [params] : [])] as const
export type ApiV1FaqAdminListListInfiniteQueryKey = ReturnType<typeof apiV1FaqAdminListListInfiniteQueryKey>
export function apiV1FaqAdminListListInfiniteQueryOptions<TData = ApiV1FaqAdminListList["response"], TQueryData = ApiV1FaqAdminListList["response"]>(
  params?: ApiV1FaqAdminListList["queryParams"],
  options: ApiV1FaqAdminListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqAdminListList["response"], ApiV1FaqAdminListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqAdminListList["data"], ApiV1FaqAdminListList["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/list/`,
        ...options,
        params: {
          ...params,
          ["id"]: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
  }
}
/**
 * @description Параметры запроса:?is_published=true/false - фильтр опубликованных вопросов?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.* **order_should_be_a_positive_number**Поле order должно быть положительным числом.
 * @summary Список частых вопросов, создание нового вопроса.
 * @link /api/v1/faq/admin/list/ */
export function useApiV1FaqAdminListListInfinite<
  TData = InfiniteData<ApiV1FaqAdminListList["response"]>,
  TQueryData = ApiV1FaqAdminListList["response"],
  TQueryKey extends QueryKey = ApiV1FaqAdminListListInfiniteQueryKey,
>(
  params?: ApiV1FaqAdminListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqAdminListList["response"], ApiV1FaqAdminListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqAdminListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1FaqAdminListList["data"], ApiV1FaqAdminListList["error"], TData, any>({
    ...apiV1FaqAdminListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqAdminListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
