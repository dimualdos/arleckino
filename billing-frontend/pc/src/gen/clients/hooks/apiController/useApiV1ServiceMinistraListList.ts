import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceMinistraListListQueryResponse, ApiV1ServiceMinistraListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceMinistraListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceMinistraListListClient = typeof client<ApiV1ServiceMinistraListListQueryResponse, never, never>
type ApiV1ServiceMinistraListList = {
  data: ApiV1ServiceMinistraListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceMinistraListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceMinistraListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceMinistraListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceMinistraListListClient>>
  }
}
export const apiV1ServiceMinistraListListQueryKey = (params?: ApiV1ServiceMinistraListList["queryParams"]) => [{ url: "/api/v1/service/ministra/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceMinistraListListQueryKey = ReturnType<typeof apiV1ServiceMinistraListListQueryKey>
export function apiV1ServiceMinistraListListQueryOptions<TData = ApiV1ServiceMinistraListList["response"], TQueryData = ApiV1ServiceMinistraListList["response"]>(
  params?: ApiV1ServiceMinistraListList["queryParams"],
  options: ApiV1ServiceMinistraListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceMinistraListList["response"], ApiV1ServiceMinistraListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceMinistraListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceMinistraListList["data"], ApiV1ServiceMinistraListList["error"]>({
        method: "get",
        url: `/api/v1/service/ministra/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/ministra/list/ */
export function useApiV1ServiceMinistraListList<
  TData = ApiV1ServiceMinistraListList["response"],
  TQueryData = ApiV1ServiceMinistraListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceMinistraListListQueryKey,
>(
  params?: ApiV1ServiceMinistraListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceMinistraListList["response"], ApiV1ServiceMinistraListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceMinistraListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceMinistraListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceMinistraListListQueryKey(params)
  const query = useQuery<ApiV1ServiceMinistraListList["data"], ApiV1ServiceMinistraListList["error"], TData, any>({
    ...apiV1ServiceMinistraListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceMinistraListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceMinistraListListInfiniteQueryKey = (params?: ApiV1ServiceMinistraListList["queryParams"]) => [{ url: "/api/v1/service/ministra/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceMinistraListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceMinistraListListInfiniteQueryKey>
export function apiV1ServiceMinistraListListInfiniteQueryOptions<TData = ApiV1ServiceMinistraListList["response"], TQueryData = ApiV1ServiceMinistraListList["response"]>(
  params?: ApiV1ServiceMinistraListList["queryParams"],
  options: ApiV1ServiceMinistraListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceMinistraListList["response"], ApiV1ServiceMinistraListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceMinistraListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceMinistraListList["data"], ApiV1ServiceMinistraListList["error"]>({
        method: "get",
        url: `/api/v1/service/ministra/list/`,
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
 * @link /api/v1/service/ministra/list/ */
export function useApiV1ServiceMinistraListListInfinite<
  TData = InfiniteData<ApiV1ServiceMinistraListList["response"]>,
  TQueryData = ApiV1ServiceMinistraListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceMinistraListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceMinistraListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceMinistraListList["response"], ApiV1ServiceMinistraListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceMinistraListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceMinistraListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceMinistraListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceMinistraListList["data"], ApiV1ServiceMinistraListList["error"], TData, any>({
    ...apiV1ServiceMinistraListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceMinistraListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
