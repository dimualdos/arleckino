import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceServerListListQueryResponse, ApiV1ServiceServerListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceServerListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceServerListListClient = typeof client<ApiV1ServiceServerListListQueryResponse, never, never>
type ApiV1ServiceServerListList = {
  data: ApiV1ServiceServerListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceServerListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceServerListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceServerListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceServerListListClient>>
  }
}
export const apiV1ServiceServerListListQueryKey = (params?: ApiV1ServiceServerListList["queryParams"]) => [{ url: "/api/v1/service/server/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceServerListListQueryKey = ReturnType<typeof apiV1ServiceServerListListQueryKey>
export function apiV1ServiceServerListListQueryOptions<TData = ApiV1ServiceServerListList["response"], TQueryData = ApiV1ServiceServerListList["response"]>(
  params?: ApiV1ServiceServerListList["queryParams"],
  options: ApiV1ServiceServerListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceServerListList["response"], ApiV1ServiceServerListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceServerListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceServerListList["data"], ApiV1ServiceServerListList["error"]>({
        method: "get",
        url: `/api/v1/service/server/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/server/list/ */
export function useApiV1ServiceServerListList<
  TData = ApiV1ServiceServerListList["response"],
  TQueryData = ApiV1ServiceServerListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceServerListListQueryKey,
>(
  params?: ApiV1ServiceServerListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceServerListList["response"], ApiV1ServiceServerListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceServerListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceServerListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceServerListListQueryKey(params)
  const query = useQuery<ApiV1ServiceServerListList["data"], ApiV1ServiceServerListList["error"], TData, any>({
    ...apiV1ServiceServerListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceServerListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceServerListListInfiniteQueryKey = (params?: ApiV1ServiceServerListList["queryParams"]) => [{ url: "/api/v1/service/server/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceServerListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceServerListListInfiniteQueryKey>
export function apiV1ServiceServerListListInfiniteQueryOptions<TData = ApiV1ServiceServerListList["response"], TQueryData = ApiV1ServiceServerListList["response"]>(
  params?: ApiV1ServiceServerListList["queryParams"],
  options: ApiV1ServiceServerListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceServerListList["response"], ApiV1ServiceServerListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceServerListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceServerListList["data"], ApiV1ServiceServerListList["error"]>({
        method: "get",
        url: `/api/v1/service/server/list/`,
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
 * @link /api/v1/service/server/list/ */
export function useApiV1ServiceServerListListInfinite<
  TData = InfiniteData<ApiV1ServiceServerListList["response"]>,
  TQueryData = ApiV1ServiceServerListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceServerListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceServerListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceServerListList["response"], ApiV1ServiceServerListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceServerListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceServerListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceServerListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceServerListList["data"], ApiV1ServiceServerListList["error"], TData, any>({
    ...apiV1ServiceServerListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceServerListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
