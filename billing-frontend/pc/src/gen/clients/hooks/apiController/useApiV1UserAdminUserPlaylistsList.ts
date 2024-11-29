import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserPlaylistsListQueryResponse, ApiV1UserAdminUserPlaylistsListPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserPlaylistsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserPlaylistsListClient = typeof client<ApiV1UserAdminUserPlaylistsListQueryResponse, never, never>
type ApiV1UserAdminUserPlaylistsList = {
  data: ApiV1UserAdminUserPlaylistsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserPlaylistsListPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserPlaylistsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserPlaylistsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserPlaylistsListClient>>
  }
}
export const apiV1UserAdminUserPlaylistsListQueryKey = (id: ApiV1UserAdminUserPlaylistsListPathParams["id"]) => [{ url: "/api/v1/user/admin/user/:id/playlists", params: { id: id } }] as const
export type ApiV1UserAdminUserPlaylistsListQueryKey = ReturnType<typeof apiV1UserAdminUserPlaylistsListQueryKey>
export function apiV1UserAdminUserPlaylistsListQueryOptions<TData = ApiV1UserAdminUserPlaylistsList["response"], TQueryData = ApiV1UserAdminUserPlaylistsList["response"]>(
  id: ApiV1UserAdminUserPlaylistsListPathParams["id"],
  options: ApiV1UserAdminUserPlaylistsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserPlaylistsList["response"], ApiV1UserAdminUserPlaylistsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserPlaylistsListQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserPlaylistsList["data"], ApiV1UserAdminUserPlaylistsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/playlists`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список плейлистов пользователей
 * @link /api/v1/user/admin/user/:id/playlists */
export function useApiV1UserAdminUserPlaylistsList<
  TData = ApiV1UserAdminUserPlaylistsList["response"],
  TQueryData = ApiV1UserAdminUserPlaylistsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserPlaylistsListQueryKey,
>(
  id: ApiV1UserAdminUserPlaylistsListPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserPlaylistsList["response"], ApiV1UserAdminUserPlaylistsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserPlaylistsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserPlaylistsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserPlaylistsListQueryKey(id)
  const query = useQuery<ApiV1UserAdminUserPlaylistsList["data"], ApiV1UserAdminUserPlaylistsList["error"], TData, any>({
    ...apiV1UserAdminUserPlaylistsListQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserPlaylistsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserPlaylistsListInfiniteQueryKey = (id: ApiV1UserAdminUserPlaylistsListPathParams["id"]) => [{ url: "/api/v1/user/admin/user/:id/playlists", params: { id: id } }] as const
export type ApiV1UserAdminUserPlaylistsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserPlaylistsListInfiniteQueryKey>
export function apiV1UserAdminUserPlaylistsListInfiniteQueryOptions<TData = ApiV1UserAdminUserPlaylistsList["response"], TQueryData = ApiV1UserAdminUserPlaylistsList["response"]>(
  id: ApiV1UserAdminUserPlaylistsListPathParams["id"],
  options: ApiV1UserAdminUserPlaylistsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserPlaylistsList["response"], ApiV1UserAdminUserPlaylistsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserPlaylistsListInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserPlaylistsList["data"], ApiV1UserAdminUserPlaylistsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/playlists`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список плейлистов пользователей
 * @link /api/v1/user/admin/user/:id/playlists */
export function useApiV1UserAdminUserPlaylistsListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserPlaylistsList["response"]>,
  TQueryData = ApiV1UserAdminUserPlaylistsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserPlaylistsListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserPlaylistsListPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserPlaylistsList["response"], ApiV1UserAdminUserPlaylistsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserPlaylistsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserPlaylistsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserPlaylistsListInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminUserPlaylistsList["data"], ApiV1UserAdminUserPlaylistsList["error"], TData, any>({
    ...apiV1UserAdminUserPlaylistsListInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserPlaylistsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
