import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsListQueryResponse,
  ApiV1IptvPlaylistGroupsListPathParams,
  ApiV1IptvPlaylistGroupsListQueryParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsListClient = typeof client<ApiV1IptvPlaylistGroupsListQueryResponse, never, never>
type ApiV1IptvPlaylistGroupsList = {
  data: ApiV1IptvPlaylistGroupsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1IptvPlaylistGroupsListPathParams
  queryParams: ApiV1IptvPlaylistGroupsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsListClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsListClient>>
  }
}
export const apiV1IptvPlaylistGroupsListQueryKey = (playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"], params?: ApiV1IptvPlaylistGroupsList["queryParams"]) =>
  [{ url: "/api/v1/iptv/playlist/:playlist_pk/groups/", params: { playlistPk: playlistPk } }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistGroupsListQueryKey = ReturnType<typeof apiV1IptvPlaylistGroupsListQueryKey>
export function apiV1IptvPlaylistGroupsListQueryOptions<TData = ApiV1IptvPlaylistGroupsList["response"], TQueryData = ApiV1IptvPlaylistGroupsList["response"]>(
  playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"],
  params?: ApiV1IptvPlaylistGroupsList["queryParams"],
  options: ApiV1IptvPlaylistGroupsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistGroupsList["response"], ApiV1IptvPlaylistGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistGroupsListQueryKey(playlistPk, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistGroupsList["data"], ApiV1IptvPlaylistGroupsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Просмотр всех групп каналов в плейлисте, создание новой группы каналов
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/ */
export function useApiV1IptvPlaylistGroupsList<
  TData = ApiV1IptvPlaylistGroupsList["response"],
  TQueryData = ApiV1IptvPlaylistGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistGroupsListQueryKey,
>(
  playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"],
  params?: ApiV1IptvPlaylistGroupsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistGroupsList["response"], ApiV1IptvPlaylistGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistGroupsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistGroupsListQueryKey(playlistPk, params)
  const query = useQuery<ApiV1IptvPlaylistGroupsList["data"], ApiV1IptvPlaylistGroupsList["error"], TData, any>({
    ...apiV1IptvPlaylistGroupsListQueryOptions<TData, TQueryData>(playlistPk, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistGroupsListInfiniteQueryKey = (playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"], params?: ApiV1IptvPlaylistGroupsList["queryParams"]) =>
  [{ url: "/api/v1/iptv/playlist/:playlist_pk/groups/", params: { playlistPk: playlistPk } }, ...(params ? [params] : [])] as const
export type ApiV1IptvPlaylistGroupsListInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistGroupsListInfiniteQueryKey>
export function apiV1IptvPlaylistGroupsListInfiniteQueryOptions<TData = ApiV1IptvPlaylistGroupsList["response"], TQueryData = ApiV1IptvPlaylistGroupsList["response"]>(
  playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"],
  params?: ApiV1IptvPlaylistGroupsList["queryParams"],
  options: ApiV1IptvPlaylistGroupsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistGroupsList["response"], ApiV1IptvPlaylistGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistGroupsListInfiniteQueryKey(playlistPk, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistGroupsList["data"], ApiV1IptvPlaylistGroupsList["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/`,
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
 * @description Просмотр всех групп каналов в плейлисте, создание новой группы каналов
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/ */
export function useApiV1IptvPlaylistGroupsListInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistGroupsList["response"]>,
  TQueryData = ApiV1IptvPlaylistGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistGroupsListInfiniteQueryKey,
>(
  playlistPk: ApiV1IptvPlaylistGroupsListPathParams["playlist_pk"],
  params?: ApiV1IptvPlaylistGroupsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistGroupsList["response"], ApiV1IptvPlaylistGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistGroupsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistGroupsListInfiniteQueryKey(playlistPk, params)
  const query = useInfiniteQuery<ApiV1IptvPlaylistGroupsList["data"], ApiV1IptvPlaylistGroupsList["error"], TData, any>({
    ...apiV1IptvPlaylistGroupsListInfiniteQueryOptions<TData, TQueryData>(playlistPk, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
