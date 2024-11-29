import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelListListQueryResponse, ApiV1IptvAdminChannelListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminChannelListListClient = typeof client<ApiV1IptvAdminChannelListListQueryResponse, never, never>
type ApiV1IptvAdminChannelListList = {
  data: ApiV1IptvAdminChannelListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1IptvAdminChannelListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelListListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelListListClient>>
  }
}
export const apiV1IptvAdminChannelListListQueryKey = (params?: ApiV1IptvAdminChannelListList["queryParams"]) => [{ url: "/api/v1/iptv/admin/channel/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminChannelListListQueryKey = ReturnType<typeof apiV1IptvAdminChannelListListQueryKey>
export function apiV1IptvAdminChannelListListQueryOptions<TData = ApiV1IptvAdminChannelListList["response"], TQueryData = ApiV1IptvAdminChannelListList["response"]>(
  params?: ApiV1IptvAdminChannelListList["queryParams"],
  options: ApiV1IptvAdminChannelListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminChannelListList["response"], ApiV1IptvAdminChannelListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminChannelListList["data"], ApiV1IptvAdminChannelListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export function useApiV1IptvAdminChannelListList<
  TData = ApiV1IptvAdminChannelListList["response"],
  TQueryData = ApiV1IptvAdminChannelListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelListListQueryKey,
>(
  params?: ApiV1IptvAdminChannelListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminChannelListList["response"], ApiV1IptvAdminChannelListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminChannelListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelListListQueryKey(params)
  const query = useQuery<ApiV1IptvAdminChannelListList["data"], ApiV1IptvAdminChannelListList["error"], TData, any>({
    ...apiV1IptvAdminChannelListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminChannelListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminChannelListListInfiniteQueryKey = (params?: ApiV1IptvAdminChannelListList["queryParams"]) =>
  [{ url: "/api/v1/iptv/admin/channel/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminChannelListListInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminChannelListListInfiniteQueryKey>
export function apiV1IptvAdminChannelListListInfiniteQueryOptions<TData = ApiV1IptvAdminChannelListList["response"], TQueryData = ApiV1IptvAdminChannelListList["response"]>(
  params?: ApiV1IptvAdminChannelListList["queryParams"],
  options: ApiV1IptvAdminChannelListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminChannelListList["response"], ApiV1IptvAdminChannelListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminChannelListList["data"], ApiV1IptvAdminChannelListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel/list/`,
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
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export function useApiV1IptvAdminChannelListListInfinite<
  TData = InfiniteData<ApiV1IptvAdminChannelListList["response"]>,
  TQueryData = ApiV1IptvAdminChannelListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelListListInfiniteQueryKey,
>(
  params?: ApiV1IptvAdminChannelListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminChannelListList["response"], ApiV1IptvAdminChannelListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1IptvAdminChannelListList["data"], ApiV1IptvAdminChannelListList["error"], TData, any>({
    ...apiV1IptvAdminChannelListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
