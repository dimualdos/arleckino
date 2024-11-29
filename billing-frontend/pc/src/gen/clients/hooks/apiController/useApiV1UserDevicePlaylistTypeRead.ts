import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserDevicePlaylistTypeReadQueryResponse, ApiV1UserDevicePlaylistTypeReadPathParams } from "../../../models/ts/apiController/ApiV1UserDevicePlaylistTypeRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserDevicePlaylistTypeReadClient = typeof client<ApiV1UserDevicePlaylistTypeReadQueryResponse, never, never>
type ApiV1UserDevicePlaylistTypeRead = {
  data: ApiV1UserDevicePlaylistTypeReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserDevicePlaylistTypeReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDevicePlaylistTypeReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDevicePlaylistTypeReadClient>>
  }
}
export const apiV1UserDevicePlaylistTypeReadQueryKey = (id: ApiV1UserDevicePlaylistTypeReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/playlist-type/", params: { id: id } }] as const
export type ApiV1UserDevicePlaylistTypeReadQueryKey = ReturnType<typeof apiV1UserDevicePlaylistTypeReadQueryKey>
export function apiV1UserDevicePlaylistTypeReadQueryOptions<TData = ApiV1UserDevicePlaylistTypeRead["response"], TQueryData = ApiV1UserDevicePlaylistTypeRead["response"]>(
  id: ApiV1UserDevicePlaylistTypeReadPathParams["id"],
  options: ApiV1UserDevicePlaylistTypeRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserDevicePlaylistTypeRead["response"], ApiV1UserDevicePlaylistTypeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDevicePlaylistTypeReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserDevicePlaylistTypeRead["data"], ApiV1UserDevicePlaylistTypeRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/playlist-type/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export function useApiV1UserDevicePlaylistTypeRead<
  TData = ApiV1UserDevicePlaylistTypeRead["response"],
  TQueryData = ApiV1UserDevicePlaylistTypeRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDevicePlaylistTypeReadQueryKey,
>(
  id: ApiV1UserDevicePlaylistTypeReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserDevicePlaylistTypeRead["response"], ApiV1UserDevicePlaylistTypeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDevicePlaylistTypeRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserDevicePlaylistTypeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDevicePlaylistTypeReadQueryKey(id)
  const query = useQuery<ApiV1UserDevicePlaylistTypeRead["data"], ApiV1UserDevicePlaylistTypeRead["error"], TData, any>({
    ...apiV1UserDevicePlaylistTypeReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserDevicePlaylistTypeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserDevicePlaylistTypeReadInfiniteQueryKey = (id: ApiV1UserDevicePlaylistTypeReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/playlist-type/", params: { id: id } }] as const
export type ApiV1UserDevicePlaylistTypeReadInfiniteQueryKey = ReturnType<typeof apiV1UserDevicePlaylistTypeReadInfiniteQueryKey>
export function apiV1UserDevicePlaylistTypeReadInfiniteQueryOptions<TData = ApiV1UserDevicePlaylistTypeRead["response"], TQueryData = ApiV1UserDevicePlaylistTypeRead["response"]>(
  id: ApiV1UserDevicePlaylistTypeReadPathParams["id"],
  options: ApiV1UserDevicePlaylistTypeRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserDevicePlaylistTypeRead["response"], ApiV1UserDevicePlaylistTypeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDevicePlaylistTypeReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserDevicePlaylistTypeRead["data"], ApiV1UserDevicePlaylistTypeRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/playlist-type/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_type_not_found_by_id**Тип плейлиста с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление типа плейлиста для устройства пользователя
 * @link /api/v1/user/device/:id/playlist-type/ */
export function useApiV1UserDevicePlaylistTypeReadInfinite<
  TData = InfiniteData<ApiV1UserDevicePlaylistTypeRead["response"]>,
  TQueryData = ApiV1UserDevicePlaylistTypeRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDevicePlaylistTypeReadInfiniteQueryKey,
>(
  id: ApiV1UserDevicePlaylistTypeReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserDevicePlaylistTypeRead["response"], ApiV1UserDevicePlaylistTypeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDevicePlaylistTypeRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserDevicePlaylistTypeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDevicePlaylistTypeReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserDevicePlaylistTypeRead["data"], ApiV1UserDevicePlaylistTypeRead["error"], TData, any>({
    ...apiV1UserDevicePlaylistTypeReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserDevicePlaylistTypeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
