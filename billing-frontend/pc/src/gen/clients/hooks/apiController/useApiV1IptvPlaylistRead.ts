import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvPlaylistReadQueryResponse, ApiV1IptvPlaylistReadPathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvPlaylistReadClient = typeof client<ApiV1IptvPlaylistReadQueryResponse, never, never>
type ApiV1IptvPlaylistRead = {
  data: ApiV1IptvPlaylistReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1IptvPlaylistReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistReadClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistReadClient>>
  }
}
export const apiV1IptvPlaylistReadQueryKey = (id: ApiV1IptvPlaylistReadPathParams["id"]) => [{ url: "/api/v1/iptv/playlist/:id/", params: { id: id } }] as const
export type ApiV1IptvPlaylistReadQueryKey = ReturnType<typeof apiV1IptvPlaylistReadQueryKey>
export function apiV1IptvPlaylistReadQueryOptions<TData = ApiV1IptvPlaylistRead["response"], TQueryData = ApiV1IptvPlaylistRead["response"]>(
  id: ApiV1IptvPlaylistReadPathParams["id"],
  options: ApiV1IptvPlaylistRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvPlaylistRead["response"], ApiV1IptvPlaylistRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvPlaylistRead["data"], ApiV1IptvPlaylistRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export function useApiV1IptvPlaylistRead<TData = ApiV1IptvPlaylistRead["response"], TQueryData = ApiV1IptvPlaylistRead["response"], TQueryKey extends QueryKey = ApiV1IptvPlaylistReadQueryKey>(
  id: ApiV1IptvPlaylistReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvPlaylistRead["response"], ApiV1IptvPlaylistRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvPlaylistRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistReadQueryKey(id)
  const query = useQuery<ApiV1IptvPlaylistRead["data"], ApiV1IptvPlaylistRead["error"], TData, any>({
    ...apiV1IptvPlaylistReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvPlaylistRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvPlaylistReadInfiniteQueryKey = (id: ApiV1IptvPlaylistReadPathParams["id"]) => [{ url: "/api/v1/iptv/playlist/:id/", params: { id: id } }] as const
export type ApiV1IptvPlaylistReadInfiniteQueryKey = ReturnType<typeof apiV1IptvPlaylistReadInfiniteQueryKey>
export function apiV1IptvPlaylistReadInfiniteQueryOptions<TData = ApiV1IptvPlaylistRead["response"], TQueryData = ApiV1IptvPlaylistRead["response"]>(
  id: ApiV1IptvPlaylistReadPathParams["id"],
  options: ApiV1IptvPlaylistRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvPlaylistRead["response"], ApiV1IptvPlaylistRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvPlaylistReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvPlaylistRead["data"], ApiV1IptvPlaylistRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/playlist/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export function useApiV1IptvPlaylistReadInfinite<
  TData = InfiniteData<ApiV1IptvPlaylistRead["response"]>,
  TQueryData = ApiV1IptvPlaylistRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvPlaylistReadInfiniteQueryKey,
>(
  id: ApiV1IptvPlaylistReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvPlaylistRead["response"], ApiV1IptvPlaylistRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvPlaylistRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvPlaylistRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvPlaylistReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1IptvPlaylistRead["data"], ApiV1IptvPlaylistRead["error"], TData, any>({
    ...apiV1IptvPlaylistReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvPlaylistRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
