import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelGroupListListQueryResponse, ApiV1IptvAdminChannelGroupListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupListListClient = typeof client<ApiV1IptvAdminChannelGroupListListQueryResponse, never, never>
type ApiV1IptvAdminChannelGroupListList = {
  data: ApiV1IptvAdminChannelGroupListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1IptvAdminChannelGroupListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupListListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListListClient>>
  }
}
export const apiV1IptvAdminChannelGroupListListQueryKey = (params?: ApiV1IptvAdminChannelGroupListList["queryParams"]) =>
  [{ url: "/api/v1/iptv/admin/channel-group/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminChannelGroupListListQueryKey = ReturnType<typeof apiV1IptvAdminChannelGroupListListQueryKey>
export function apiV1IptvAdminChannelGroupListListQueryOptions<TData = ApiV1IptvAdminChannelGroupListList["response"], TQueryData = ApiV1IptvAdminChannelGroupListList["response"]>(
  params?: ApiV1IptvAdminChannelGroupListList["queryParams"],
  options: ApiV1IptvAdminChannelGroupListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminChannelGroupListList["response"], ApiV1IptvAdminChannelGroupListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelGroupListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminChannelGroupListList["data"], ApiV1IptvAdminChannelGroupListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel-group/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список групп каналов, создание новой группы каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export function useApiV1IptvAdminChannelGroupListList<
  TData = ApiV1IptvAdminChannelGroupListList["response"],
  TQueryData = ApiV1IptvAdminChannelGroupListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelGroupListListQueryKey,
>(
  params?: ApiV1IptvAdminChannelGroupListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminChannelGroupListList["response"], ApiV1IptvAdminChannelGroupListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelGroupListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminChannelGroupListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelGroupListListQueryKey(params)
  const query = useQuery<ApiV1IptvAdminChannelGroupListList["data"], ApiV1IptvAdminChannelGroupListList["error"], TData, any>({
    ...apiV1IptvAdminChannelGroupListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminChannelGroupListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminChannelGroupListListInfiniteQueryKey = (params?: ApiV1IptvAdminChannelGroupListList["queryParams"]) =>
  [{ url: "/api/v1/iptv/admin/channel-group/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvAdminChannelGroupListListInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminChannelGroupListListInfiniteQueryKey>
export function apiV1IptvAdminChannelGroupListListInfiniteQueryOptions<TData = ApiV1IptvAdminChannelGroupListList["response"], TQueryData = ApiV1IptvAdminChannelGroupListList["response"]>(
  params?: ApiV1IptvAdminChannelGroupListList["queryParams"],
  options: ApiV1IptvAdminChannelGroupListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminChannelGroupListList["response"], ApiV1IptvAdminChannelGroupListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelGroupListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminChannelGroupListList["data"], ApiV1IptvAdminChannelGroupListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel-group/list/`,
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
 * @description Список групп каналов, создание новой группы каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export function useApiV1IptvAdminChannelGroupListListInfinite<
  TData = InfiniteData<ApiV1IptvAdminChannelGroupListList["response"]>,
  TQueryData = ApiV1IptvAdminChannelGroupListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelGroupListListInfiniteQueryKey,
>(
  params?: ApiV1IptvAdminChannelGroupListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminChannelGroupListList["response"], ApiV1IptvAdminChannelGroupListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelGroupListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelGroupListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelGroupListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1IptvAdminChannelGroupListList["data"], ApiV1IptvAdminChannelGroupListList["error"], TData, any>({
    ...apiV1IptvAdminChannelGroupListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelGroupListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
