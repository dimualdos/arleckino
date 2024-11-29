import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistGroupsReadQueryResponse, ApiV1IptvPlaylistGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsReadClient = typeof client<ApiV1IptvPlaylistGroupsReadQueryResponse, never, never>
type ApiV1IptvPlaylistGroupsRead = {
  data: ApiV1IptvPlaylistGroupsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1IptvPlaylistGroupsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsReadClient>>
  }
}
export const apiV1IptvPlaylistGroupsReadQueryKey = (id: ApiV1IptvPlaylistGroupsReadPathParams["id"], playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"]) =>
  [{ url: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", params: { playlistPk: playlistPk, id: id } }] as const
export type ApiV1IptvPlaylistGroupsReadQueryKey = ReturnType<typeof apiV1IptvPlaylistGroupsReadQueryKey>
export function apiV1IptvPlaylistGroupsReadQueryOptions<TData = ApiV1IptvPlaylistGroupsRead["response"], TQueryData = ApiV1IptvPlaylistGroupsRead["response"]>(
  id: ApiV1IptvPlaylistGroupsReadPathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"],
  options: ApiV1IptvPlaylistGroupsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistGroupsRead["response"], ApiV1IptvPlaylistGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistGroupsReadQueryKey(id, playlistPk)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistGroupsRead["data"], ApiV1IptvPlaylistGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export function useApiV1IptvPlaylistGroupsRead<
  TData = ApiV1IptvPlaylistGroupsRead["response"],
  TQueryData = ApiV1IptvPlaylistGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistGroupsReadQueryKey,
>(
  id: ApiV1IptvPlaylistGroupsReadPathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistGroupsRead["response"], ApiV1IptvPlaylistGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistGroupsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistGroupsReadQueryKey(id, playlistPk)
  const query = useQuery<ApiV1IptvPlaylistGroupsRead["data"], ApiV1IptvPlaylistGroupsRead["error"], TData, any>({
    ...apiV1IptvPlaylistGroupsReadQueryOptions<TData, TQueryData>(id, playlistPk, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistGroupsReadInfiniteQueryKey = (id: ApiV1IptvPlaylistGroupsReadPathParams["id"], playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"]) =>
  [{ url: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", params: { playlistPk: playlistPk, id: id } }] as const
export type ApiV1IptvPlaylistGroupsReadInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistGroupsReadInfiniteQueryKey>
export function apiV1IptvPlaylistGroupsReadInfiniteQueryOptions<TData = ApiV1IptvPlaylistGroupsRead["response"], TQueryData = ApiV1IptvPlaylistGroupsRead["response"]>(
  id: ApiV1IptvPlaylistGroupsReadPathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"],
  options: ApiV1IptvPlaylistGroupsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistGroupsRead["response"], ApiV1IptvPlaylistGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistGroupsReadInfiniteQueryKey(id, playlistPk)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistGroupsRead["data"], ApiV1IptvPlaylistGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export function useApiV1IptvPlaylistGroupsReadInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistGroupsRead["response"]>,
  TQueryData = ApiV1IptvPlaylistGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistGroupsReadInfiniteQueryKey,
>(
  id: ApiV1IptvPlaylistGroupsReadPathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsReadPathParams["playlist_pk"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistGroupsRead["response"], ApiV1IptvPlaylistGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistGroupsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistGroupsReadInfiniteQueryKey(id, playlistPk)
  const query = useInfiniteQuery<ApiV1IptvPlaylistGroupsRead["data"], ApiV1IptvPlaylistGroupsRead["error"], TData, any>({
    ...apiV1IptvPlaylistGroupsReadInfiniteQueryOptions<TData, TQueryData>(id, playlistPk, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
