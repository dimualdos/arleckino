import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserBlockListListQueryResponse, ApiV1UserBlockListListQueryParams } from "../../../models/ts/apiController/ApiV1UserBlockListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserBlockListListClient = typeof client<ApiV1UserBlockListListQueryResponse, never, never>
type ApiV1UserBlockListList = {
  data: ApiV1UserBlockListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserBlockListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserBlockListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserBlockListListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserBlockListListClient>>
  }
}
export const apiV1UserBlockListListQueryKey = (params?: ApiV1UserBlockListList["queryParams"]) => [{ url: "/api/v1/user/block/list" }, ...(params ? [params] : [])] as const
export type ApiV1UserBlockListListQueryKey = ReturnType<typeof apiV1UserBlockListListQueryKey>
export function apiV1UserBlockListListQueryOptions<TData = ApiV1UserBlockListList["response"], TQueryData = ApiV1UserBlockListList["response"]>(
  params?: ApiV1UserBlockListList["queryParams"],
  options: ApiV1UserBlockListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserBlockListList["response"], ApiV1UserBlockListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserBlockListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserBlockListList["data"], ApiV1UserBlockListList["error"]>({
        method: "get",
        url: `/api/v1/user/block/list`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление выборки записей о блокировках активного пользователя
 * @link /api/v1/user/block/list */
export function useApiV1UserBlockListList<TData = ApiV1UserBlockListList["response"], TQueryData = ApiV1UserBlockListList["response"], TQueryKey extends QueryKey = ApiV1UserBlockListListQueryKey>(
  params?: ApiV1UserBlockListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserBlockListList["response"], ApiV1UserBlockListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserBlockListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserBlockListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserBlockListListQueryKey(params)
  const query = useQuery<ApiV1UserBlockListList["data"], ApiV1UserBlockListList["error"], TData, any>({
    ...apiV1UserBlockListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserBlockListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserBlockListListInfiniteQueryKey = (params?: ApiV1UserBlockListList["queryParams"]) => [{ url: "/api/v1/user/block/list" }, ...(params ? [params] : [])] as const
export type ApiV1UserBlockListListInfiniteQueryKey = ReturnType<typeof apiV1UserBlockListListInfiniteQueryKey>
export function apiV1UserBlockListListInfiniteQueryOptions<TData = ApiV1UserBlockListList["response"], TQueryData = ApiV1UserBlockListList["response"]>(
  params?: ApiV1UserBlockListList["queryParams"],
  options: ApiV1UserBlockListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserBlockListList["response"], ApiV1UserBlockListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserBlockListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserBlockListList["data"], ApiV1UserBlockListList["error"]>({
        method: "get",
        url: `/api/v1/user/block/list`,
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
 * @description Апи представление выборки записей о блокировках активного пользователя
 * @link /api/v1/user/block/list */
export function useApiV1UserBlockListListInfinite<
  TData = InfiniteData<ApiV1UserBlockListList["response"]>,
  TQueryData = ApiV1UserBlockListList["response"],
  TQueryKey extends QueryKey = ApiV1UserBlockListListInfiniteQueryKey,
>(
  params?: ApiV1UserBlockListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserBlockListList["response"], ApiV1UserBlockListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserBlockListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserBlockListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserBlockListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserBlockListList["data"], ApiV1UserBlockListList["error"], TData, any>({
    ...apiV1UserBlockListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserBlockListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
