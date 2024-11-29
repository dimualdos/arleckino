import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistChannelsListQueryResponse } from "../../../models/ts/apiController/ApiV1IptvPlaylistChannelsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistChannelsListClient = typeof client<ApiV1IptvPlaylistChannelsListQueryResponse, never, never>
type ApiV1IptvPlaylistChannelsList = {
  data: ApiV1IptvPlaylistChannelsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistChannelsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistChannelsListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistChannelsListClient>>
  }
}
export const apiV1IptvPlaylistChannelsListQueryKey = () => [{ url: "/api/v1/iptv/playlist/channels/" }] as const
export type ApiV1IptvPlaylistChannelsListQueryKey = ReturnType<typeof apiV1IptvPlaylistChannelsListQueryKey>
export function apiV1IptvPlaylistChannelsListQueryOptions<TData = ApiV1IptvPlaylistChannelsList["response"], TQueryData = ApiV1IptvPlaylistChannelsList["response"]>(
  options: ApiV1IptvPlaylistChannelsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistChannelsList["response"], ApiV1IptvPlaylistChannelsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistChannelsListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistChannelsList["data"], ApiV1IptvPlaylistChannelsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/channels/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Просмотр всех каналов в плейлисте
 * @link /api/v1/iptv/playlist/channels/ */
export function useApiV1IptvPlaylistChannelsList<
  TData = ApiV1IptvPlaylistChannelsList["response"],
  TQueryData = ApiV1IptvPlaylistChannelsList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistChannelsListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistChannelsList["response"], ApiV1IptvPlaylistChannelsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistChannelsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistChannelsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistChannelsListQueryKey()
  const query = useQuery<ApiV1IptvPlaylistChannelsList["data"], ApiV1IptvPlaylistChannelsList["error"], TData, any>({
    ...apiV1IptvPlaylistChannelsListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistChannelsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistChannelsListInfiniteQueryKey = () => [{ url: "/api/v1/iptv/playlist/channels/" }] as const
export type ApiV1IptvPlaylistChannelsListInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistChannelsListInfiniteQueryKey>
export function apiV1IptvPlaylistChannelsListInfiniteQueryOptions<TData = ApiV1IptvPlaylistChannelsList["response"], TQueryData = ApiV1IptvPlaylistChannelsList["response"]>(
  options: ApiV1IptvPlaylistChannelsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistChannelsList["response"], ApiV1IptvPlaylistChannelsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistChannelsListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistChannelsList["data"], ApiV1IptvPlaylistChannelsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/channels/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Просмотр всех каналов в плейлисте
 * @link /api/v1/iptv/playlist/channels/ */
export function useApiV1IptvPlaylistChannelsListInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistChannelsList["response"]>,
  TQueryData = ApiV1IptvPlaylistChannelsList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistChannelsListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistChannelsList["response"], ApiV1IptvPlaylistChannelsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistChannelsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistChannelsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistChannelsListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1IptvPlaylistChannelsList["data"], ApiV1IptvPlaylistChannelsList["error"], TData, any>({
    ...apiV1IptvPlaylistChannelsListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistChannelsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
