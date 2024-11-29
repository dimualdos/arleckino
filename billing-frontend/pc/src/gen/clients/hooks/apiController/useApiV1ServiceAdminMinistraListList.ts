import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminMinistraListListQueryResponse, ApiV1ServiceAdminMinistraListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraListListClient = typeof client<ApiV1ServiceAdminMinistraListListQueryResponse, never, never>
type ApiV1ServiceAdminMinistraListList = {
  data: ApiV1ServiceAdminMinistraListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceAdminMinistraListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraListListClient>>
  }
}
export const apiV1ServiceAdminMinistraListListQueryKey = (params?: ApiV1ServiceAdminMinistraListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/ministra/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminMinistraListListQueryKey = ReturnType<typeof apiV1ServiceAdminMinistraListListQueryKey>
export function apiV1ServiceAdminMinistraListListQueryOptions<TData = ApiV1ServiceAdminMinistraListList["response"], TQueryData = ApiV1ServiceAdminMinistraListList["response"]>(
  params?: ApiV1ServiceAdminMinistraListList["queryParams"],
  options: ApiV1ServiceAdminMinistraListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminMinistraListList["response"], ApiV1ServiceAdminMinistraListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminMinistraListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraListList["data"], ApiV1ServiceAdminMinistraListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/ministra/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/admin/ministra/list/ */
export function useApiV1ServiceAdminMinistraListList<
  TData = ApiV1ServiceAdminMinistraListList["response"],
  TQueryData = ApiV1ServiceAdminMinistraListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminMinistraListListQueryKey,
>(
  params?: ApiV1ServiceAdminMinistraListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminMinistraListList["response"], ApiV1ServiceAdminMinistraListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminMinistraListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminMinistraListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminMinistraListListQueryKey(params)
  const query = useQuery<ApiV1ServiceAdminMinistraListList["data"], ApiV1ServiceAdminMinistraListList["error"], TData, any>({
    ...apiV1ServiceAdminMinistraListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminMinistraListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminMinistraListListInfiniteQueryKey = (params?: ApiV1ServiceAdminMinistraListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/ministra/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminMinistraListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminMinistraListListInfiniteQueryKey>
export function apiV1ServiceAdminMinistraListListInfiniteQueryOptions<TData = ApiV1ServiceAdminMinistraListList["response"], TQueryData = ApiV1ServiceAdminMinistraListList["response"]>(
  params?: ApiV1ServiceAdminMinistraListList["queryParams"],
  options: ApiV1ServiceAdminMinistraListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminMinistraListList["response"], ApiV1ServiceAdminMinistraListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminMinistraListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminMinistraListList["data"], ApiV1ServiceAdminMinistraListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/ministra/list/`,
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
 * @link /api/v1/service/admin/ministra/list/ */
export function useApiV1ServiceAdminMinistraListListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminMinistraListList["response"]>,
  TQueryData = ApiV1ServiceAdminMinistraListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminMinistraListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceAdminMinistraListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminMinistraListList["response"], ApiV1ServiceAdminMinistraListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminMinistraListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminMinistraListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminMinistraListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceAdminMinistraListList["data"], ApiV1ServiceAdminMinistraListList["error"], TData, any>({
    ...apiV1ServiceAdminMinistraListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminMinistraListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
