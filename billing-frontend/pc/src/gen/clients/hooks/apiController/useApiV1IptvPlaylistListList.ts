import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistListListQueryResponse, ApiV1IptvPlaylistListListQueryParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistListListClient = typeof client<ApiV1IptvPlaylistListListQueryResponse, never, never>
type ApiV1IptvPlaylistListList = {
  data: ApiV1IptvPlaylistListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1IptvPlaylistListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistListListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistListListClient>>
  }
}
export const apiV1IptvPlaylistListListQueryKey = (params?: ApiV1IptvPlaylistListList["queryParams"]) => [{ url: "/api/v1/iptv/playlist/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistListListQueryKey = ReturnType<typeof apiV1IptvPlaylistListListQueryKey>
export function apiV1IptvPlaylistListListQueryOptions<TData = ApiV1IptvPlaylistListList["response"], TQueryData = ApiV1IptvPlaylistListList["response"]>(
  params?: ApiV1IptvPlaylistListList["queryParams"],
  options: ApiV1IptvPlaylistListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistListList["response"], ApiV1IptvPlaylistListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistListList["data"], ApiV1IptvPlaylistListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр всех плейлистов, создание нового плейлиста
 * @link /api/v1/iptv/playlist/list/ */
export function useApiV1IptvPlaylistListList<
  TData = ApiV1IptvPlaylistListList["response"],
  TQueryData = ApiV1IptvPlaylistListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistListListQueryKey,
>(
  params?: ApiV1IptvPlaylistListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistListList["response"], ApiV1IptvPlaylistListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistListListQueryKey(params)
  const query = useQuery<ApiV1IptvPlaylistListList["data"], ApiV1IptvPlaylistListList["error"], TData, any>({
    ...apiV1IptvPlaylistListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistListListInfiniteQueryKey = (params?: ApiV1IptvPlaylistListList["queryParams"]) => [{ url: "/api/v1/iptv/playlist/list/" }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistListListInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistListListInfiniteQueryKey>
export function apiV1IptvPlaylistListListInfiniteQueryOptions<TData = ApiV1IptvPlaylistListList["response"], TQueryData = ApiV1IptvPlaylistListList["response"]>(
  params?: ApiV1IptvPlaylistListList["queryParams"],
  options: ApiV1IptvPlaylistListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistListList["response"], ApiV1IptvPlaylistListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistListList["data"], ApiV1IptvPlaylistListList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/list/`,
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
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр всех плейлистов, создание нового плейлиста
 * @link /api/v1/iptv/playlist/list/ */
export function useApiV1IptvPlaylistListListInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistListList["response"]>,
  TQueryData = ApiV1IptvPlaylistListList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistListListInfiniteQueryKey,
>(
  params?: ApiV1IptvPlaylistListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistListList["response"], ApiV1IptvPlaylistListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1IptvPlaylistListList["data"], ApiV1IptvPlaylistListList["error"], TData, any>({
    ...apiV1IptvPlaylistListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
