import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1NewsListListQueryResponse, ApiV1NewsListListQueryParams } from "../../../models/ts/apiController/ApiV1NewsListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1NewsListListClient = typeof client<ApiV1NewsListListQueryResponse, never, never>
type ApiV1NewsListList = {
  data: ApiV1NewsListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1NewsListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsListListClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsListListClient>>
  }
}
export const apiV1NewsListListQueryKey = (params?: ApiV1NewsListList["queryParams"]) => [{ url: "/api/v1/news/list/" }, ...(params ? [params] : [])] as const
export type ApiV1NewsListListQueryKey = ReturnType<typeof apiV1NewsListListQueryKey>
export function apiV1NewsListListQueryOptions<TData = ApiV1NewsListList["response"], TQueryData = ApiV1NewsListList["response"]>(
  params?: ApiV1NewsListList["queryParams"],
  options: ApiV1NewsListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1NewsListList["response"], ApiV1NewsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1NewsListList["data"], ApiV1NewsListList["error"]>({
        method: "get",
        url: `/api/v1/news/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названию
 * @summary Список новостей.
 * @link /api/v1/news/list/ */
export function useApiV1NewsListList<TData = ApiV1NewsListList["response"], TQueryData = ApiV1NewsListList["response"], TQueryKey extends QueryKey = ApiV1NewsListListQueryKey>(
  params?: ApiV1NewsListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1NewsListList["response"], ApiV1NewsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1NewsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsListListQueryKey(params)
  const query = useQuery<ApiV1NewsListList["data"], ApiV1NewsListList["error"], TData, any>({
    ...apiV1NewsListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1NewsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1NewsListListInfiniteQueryKey = (params?: ApiV1NewsListList["queryParams"]) => [{ url: "/api/v1/news/list/" }, ...(params ? [params] : [])] as const
export type ApiV1NewsListListInfiniteQueryKey = ReturnType<typeof apiV1NewsListListInfiniteQueryKey>
export function apiV1NewsListListInfiniteQueryOptions<TData = ApiV1NewsListList["response"], TQueryData = ApiV1NewsListList["response"]>(
  params?: ApiV1NewsListList["queryParams"],
  options: ApiV1NewsListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1NewsListList["response"], ApiV1NewsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1NewsListList["data"], ApiV1NewsListList["error"]>({
        method: "get",
        url: `/api/v1/news/list/`,
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
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названию
 * @summary Список новостей.
 * @link /api/v1/news/list/ */
export function useApiV1NewsListListInfinite<
  TData = InfiniteData<ApiV1NewsListList["response"]>,
  TQueryData = ApiV1NewsListList["response"],
  TQueryKey extends QueryKey = ApiV1NewsListListInfiniteQueryKey,
>(
  params?: ApiV1NewsListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1NewsListList["response"], ApiV1NewsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1NewsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1NewsListList["data"], ApiV1NewsListList["error"], TData, any>({
    ...apiV1NewsListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1NewsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
