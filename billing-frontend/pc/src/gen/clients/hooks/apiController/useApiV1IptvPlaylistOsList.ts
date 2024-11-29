import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistOsListQueryResponse, ApiV1IptvPlaylistOsListQueryParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistOsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistOsListClient = typeof client<ApiV1IptvPlaylistOsListQueryResponse, never, never>
type ApiV1IptvPlaylistOsList = {
  data: ApiV1IptvPlaylistOsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1IptvPlaylistOsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistOsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistOsListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistOsListClient>>
  }
}
export const apiV1IptvPlaylistOsListQueryKey = (params?: ApiV1IptvPlaylistOsList["queryParams"]) => [{ url: "/api/v1/iptv/playlist-os/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistOsListQueryKey = ReturnType<typeof apiV1IptvPlaylistOsListQueryKey>
export function apiV1IptvPlaylistOsListQueryOptions<TData = ApiV1IptvPlaylistOsList["response"], TQueryData = ApiV1IptvPlaylistOsList["response"]>(
  params?: ApiV1IptvPlaylistOsList["queryParams"],
  options: ApiV1IptvPlaylistOsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistOsList["response"], ApiV1IptvPlaylistOsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistOsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistOsList["data"], ApiV1IptvPlaylistOsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist-os/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/iptv/playlist-os/ */
export function useApiV1IptvPlaylistOsList<TData = ApiV1IptvPlaylistOsList["response"], TQueryData = ApiV1IptvPlaylistOsList["response"], TQueryKey extends QueryKey = ApiV1IptvPlaylistOsListQueryKey>(
  params?: ApiV1IptvPlaylistOsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistOsList["response"], ApiV1IptvPlaylistOsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistOsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistOsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistOsListQueryKey(params)
  const query = useQuery<ApiV1IptvPlaylistOsList["data"], ApiV1IptvPlaylistOsList["error"], TData, any>({
    ...apiV1IptvPlaylistOsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistOsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistOsListInfiniteQueryKey = (params?: ApiV1IptvPlaylistOsList["queryParams"]) => [{ url: "/api/v1/iptv/playlist-os/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistOsListInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistOsListInfiniteQueryKey>
export function apiV1IptvPlaylistOsListInfiniteQueryOptions<TData = ApiV1IptvPlaylistOsList["response"], TQueryData = ApiV1IptvPlaylistOsList["response"]>(
  params?: ApiV1IptvPlaylistOsList["queryParams"],
  options: ApiV1IptvPlaylistOsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistOsList["response"], ApiV1IptvPlaylistOsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistOsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistOsList["data"], ApiV1IptvPlaylistOsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist-os/`,
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
 * @link /api/v1/iptv/playlist-os/ */
export function useApiV1IptvPlaylistOsListInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistOsList["response"]>,
  TQueryData = ApiV1IptvPlaylistOsList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistOsListInfiniteQueryKey,
>(
  params?: ApiV1IptvPlaylistOsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistOsList["response"], ApiV1IptvPlaylistOsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistOsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistOsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistOsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1IptvPlaylistOsList["data"], ApiV1IptvPlaylistOsList["error"], TData, any>({
    ...apiV1IptvPlaylistOsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistOsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
