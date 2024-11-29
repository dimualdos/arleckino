import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1NewsAdminListListQueryResponse, ApiV1NewsAdminListListQueryParams } from "../../../models/ts/apiController/ApiV1NewsAdminListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1NewsAdminListListClient = typeof client<ApiV1NewsAdminListListQueryResponse, never, never>
type ApiV1NewsAdminListList = {
  data: ApiV1NewsAdminListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1NewsAdminListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminListListClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminListListClient>>
  }
}
export const apiV1NewsAdminListListQueryKey = (params?: ApiV1NewsAdminListList["queryParams"]) => [{ url: "/api/v1/news/admin/list/" }, ...(params ? [params] : [])] as const
export type ApiV1NewsAdminListListQueryKey = ReturnType<typeof apiV1NewsAdminListListQueryKey>
export function apiV1NewsAdminListListQueryOptions<TData = ApiV1NewsAdminListList["response"], TQueryData = ApiV1NewsAdminListList["response"]>(
  params?: ApiV1NewsAdminListList["queryParams"],
  options: ApiV1NewsAdminListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1NewsAdminListList["response"], ApiV1NewsAdminListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsAdminListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1NewsAdminListList["data"], ApiV1NewsAdminListList["error"]>({
        method: "get",
        url: `/api/v1/news/admin/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Список новостей, создание новой новости.
 * @link /api/v1/news/admin/list/ */
export function useApiV1NewsAdminListList<TData = ApiV1NewsAdminListList["response"], TQueryData = ApiV1NewsAdminListList["response"], TQueryKey extends QueryKey = ApiV1NewsAdminListListQueryKey>(
  params?: ApiV1NewsAdminListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1NewsAdminListList["response"], ApiV1NewsAdminListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsAdminListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1NewsAdminListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsAdminListListQueryKey(params)
  const query = useQuery<ApiV1NewsAdminListList["data"], ApiV1NewsAdminListList["error"], TData, any>({
    ...apiV1NewsAdminListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1NewsAdminListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1NewsAdminListListInfiniteQueryKey = (params?: ApiV1NewsAdminListList["queryParams"]) => [{ url: "/api/v1/news/admin/list/" }, ...(params ? [params] : [])] as const
export type ApiV1NewsAdminListListInfiniteQueryKey = ReturnType<typeof apiV1NewsAdminListListInfiniteQueryKey>
export function apiV1NewsAdminListListInfiniteQueryOptions<TData = ApiV1NewsAdminListList["response"], TQueryData = ApiV1NewsAdminListList["response"]>(
  params?: ApiV1NewsAdminListList["queryParams"],
  options: ApiV1NewsAdminListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1NewsAdminListList["response"], ApiV1NewsAdminListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsAdminListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1NewsAdminListList["data"], ApiV1NewsAdminListList["error"]>({
        method: "get",
        url: `/api/v1/news/admin/list/`,
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
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Список новостей, создание новой новости.
 * @link /api/v1/news/admin/list/ */
export function useApiV1NewsAdminListListInfinite<
  TData = InfiniteData<ApiV1NewsAdminListList["response"]>,
  TQueryData = ApiV1NewsAdminListList["response"],
  TQueryKey extends QueryKey = ApiV1NewsAdminListListInfiniteQueryKey,
>(
  params?: ApiV1NewsAdminListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1NewsAdminListList["response"], ApiV1NewsAdminListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsAdminListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1NewsAdminListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsAdminListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1NewsAdminListList["data"], ApiV1NewsAdminListList["error"], TData, any>({
    ...apiV1NewsAdminListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1NewsAdminListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
