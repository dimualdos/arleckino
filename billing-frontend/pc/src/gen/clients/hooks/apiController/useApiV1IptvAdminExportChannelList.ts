import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminExportChannelListQueryResponse } from "../../../models/ts/apiController/ApiV1IptvAdminExportChannelList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminExportChannelListClient = typeof client<ApiV1IptvAdminExportChannelListQueryResponse, never, never>
type ApiV1IptvAdminExportChannelList = {
  data: ApiV1IptvAdminExportChannelListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminExportChannelListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminExportChannelListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminExportChannelListClient>>
  }
}
export const apiV1IptvAdminExportChannelListQueryKey = () => [{ url: "/api/v1/iptv/admin/export-channel/" }] as const
export type ApiV1IptvAdminExportChannelListQueryKey = ReturnType<typeof apiV1IptvAdminExportChannelListQueryKey>
export function apiV1IptvAdminExportChannelListQueryOptions<TData = ApiV1IptvAdminExportChannelList["response"], TQueryData = ApiV1IptvAdminExportChannelList["response"]>(
  options: ApiV1IptvAdminExportChannelList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminExportChannelList["response"], ApiV1IptvAdminExportChannelList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminExportChannelListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminExportChannelList["data"], ApiV1IptvAdminExportChannelList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/export-channel/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/iptv/admin/export-channel/ */
export function useApiV1IptvAdminExportChannelList<
  TData = ApiV1IptvAdminExportChannelList["response"],
  TQueryData = ApiV1IptvAdminExportChannelList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminExportChannelListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminExportChannelList["response"], ApiV1IptvAdminExportChannelList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminExportChannelList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminExportChannelList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminExportChannelListQueryKey()
  const query = useQuery<ApiV1IptvAdminExportChannelList["data"], ApiV1IptvAdminExportChannelList["error"], TData, any>({
    ...apiV1IptvAdminExportChannelListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminExportChannelList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminExportChannelListInfiniteQueryKey = () => [{ url: "/api/v1/iptv/admin/export-channel/" }] as const
export type ApiV1IptvAdminExportChannelListInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminExportChannelListInfiniteQueryKey>
export function apiV1IptvAdminExportChannelListInfiniteQueryOptions<TData = ApiV1IptvAdminExportChannelList["response"], TQueryData = ApiV1IptvAdminExportChannelList["response"]>(
  options: ApiV1IptvAdminExportChannelList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminExportChannelList["response"], ApiV1IptvAdminExportChannelList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminExportChannelListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminExportChannelList["data"], ApiV1IptvAdminExportChannelList["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/export-channel/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/iptv/admin/export-channel/ */
export function useApiV1IptvAdminExportChannelListInfinite<
  TData = InfiniteData<ApiV1IptvAdminExportChannelList["response"]>,
  TQueryData = ApiV1IptvAdminExportChannelList["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminExportChannelListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminExportChannelList["response"], ApiV1IptvAdminExportChannelList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminExportChannelList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminExportChannelList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminExportChannelListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1IptvAdminExportChannelList["data"], ApiV1IptvAdminExportChannelList["error"], TData, any>({
    ...apiV1IptvAdminExportChannelListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminExportChannelList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
