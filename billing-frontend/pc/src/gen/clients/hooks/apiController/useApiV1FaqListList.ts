import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqListListQueryResponse, ApiV1FaqListListQueryParams } from "../../../models/ts/apiController/ApiV1FaqListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqListListClient = typeof client<ApiV1FaqListListQueryResponse, never, never>
type ApiV1FaqListList = {
  data: ApiV1FaqListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1FaqListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqListListClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqListListClient>>
  }
}
export const apiV1FaqListListQueryKey = (params?: ApiV1FaqListList["queryParams"]) => [{ url: "/api/v1/faq/list/" }, ...(params ? [params] : [])] as const
export type ApiV1FaqListListQueryKey = ReturnType<typeof apiV1FaqListListQueryKey>
export function apiV1FaqListListQueryOptions<TData = ApiV1FaqListList["response"], TQueryData = ApiV1FaqListList["response"]>(
  params?: ApiV1FaqListList["queryParams"],
  options: ApiV1FaqListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqListList["response"], ApiV1FaqListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqListList["data"], ApiV1FaqListList["error"]>({
        method: "get",
        url: `/api/v1/faq/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Параметры запроса:?search= - Поиск по названию?tag={tag_id} - Поиск по ID тега?language={language_id} - Поиск по ID языка?ordering=[-]order|number_of_views - Сортировка по указанному полю, ordering=-order - в обратном порядке
 * @summary Список вопросов.
 * @link /api/v1/faq/list/ */
export function useApiV1FaqListList<TData = ApiV1FaqListList["response"], TQueryData = ApiV1FaqListList["response"], TQueryKey extends QueryKey = ApiV1FaqListListQueryKey>(
  params?: ApiV1FaqListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqListList["response"], ApiV1FaqListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqListListQueryKey(params)
  const query = useQuery<ApiV1FaqListList["data"], ApiV1FaqListList["error"], TData, any>({
    ...apiV1FaqListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqListListInfiniteQueryKey = (params?: ApiV1FaqListList["queryParams"]) => [{ url: "/api/v1/faq/list/" }, ...(params ? [params] : [])] as const
export type ApiV1FaqListListInfiniteQueryKey = ReturnType<typeof apiV1FaqListListInfiniteQueryKey>
export function apiV1FaqListListInfiniteQueryOptions<TData = ApiV1FaqListList["response"], TQueryData = ApiV1FaqListList["response"]>(
  params?: ApiV1FaqListList["queryParams"],
  options: ApiV1FaqListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqListList["response"], ApiV1FaqListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqListList["data"], ApiV1FaqListList["error"]>({
        method: "get",
        url: `/api/v1/faq/list/`,
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
 * @description Параметры запроса:?search= - Поиск по названию?tag={tag_id} - Поиск по ID тега?language={language_id} - Поиск по ID языка?ordering=[-]order|number_of_views - Сортировка по указанному полю, ordering=-order - в обратном порядке
 * @summary Список вопросов.
 * @link /api/v1/faq/list/ */
export function useApiV1FaqListListInfinite<
  TData = InfiniteData<ApiV1FaqListList["response"]>,
  TQueryData = ApiV1FaqListList["response"],
  TQueryKey extends QueryKey = ApiV1FaqListListInfiniteQueryKey,
>(
  params?: ApiV1FaqListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqListList["response"], ApiV1FaqListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1FaqListList["data"], ApiV1FaqListList["error"], TData, any>({
    ...apiV1FaqListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
