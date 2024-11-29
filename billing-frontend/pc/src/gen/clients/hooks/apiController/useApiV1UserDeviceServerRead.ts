import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserDeviceServerReadQueryResponse, ApiV1UserDeviceServerReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceServerRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserDeviceServerReadClient = typeof client<ApiV1UserDeviceServerReadQueryResponse, never, never>
type ApiV1UserDeviceServerRead = {
  data: ApiV1UserDeviceServerReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserDeviceServerReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceServerReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceServerReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceServerReadClient>>
  }
}
export const apiV1UserDeviceServerReadQueryKey = (id: ApiV1UserDeviceServerReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/server/", params: { id: id } }] as const
export type ApiV1UserDeviceServerReadQueryKey = ReturnType<typeof apiV1UserDeviceServerReadQueryKey>
export function apiV1UserDeviceServerReadQueryOptions<TData = ApiV1UserDeviceServerRead["response"], TQueryData = ApiV1UserDeviceServerRead["response"]>(
  id: ApiV1UserDeviceServerReadPathParams["id"],
  options: ApiV1UserDeviceServerRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserDeviceServerRead["response"], ApiV1UserDeviceServerRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceServerReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserDeviceServerRead["data"], ApiV1UserDeviceServerRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/server/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export function useApiV1UserDeviceServerRead<
  TData = ApiV1UserDeviceServerRead["response"],
  TQueryData = ApiV1UserDeviceServerRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDeviceServerReadQueryKey,
>(
  id: ApiV1UserDeviceServerReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserDeviceServerRead["response"], ApiV1UserDeviceServerRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceServerRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserDeviceServerRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceServerReadQueryKey(id)
  const query = useQuery<ApiV1UserDeviceServerRead["data"], ApiV1UserDeviceServerRead["error"], TData, any>({
    ...apiV1UserDeviceServerReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserDeviceServerRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserDeviceServerReadInfiniteQueryKey = (id: ApiV1UserDeviceServerReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/server/", params: { id: id } }] as const
export type ApiV1UserDeviceServerReadInfiniteQueryKey = ReturnType<typeof apiV1UserDeviceServerReadInfiniteQueryKey>
export function apiV1UserDeviceServerReadInfiniteQueryOptions<TData = ApiV1UserDeviceServerRead["response"], TQueryData = ApiV1UserDeviceServerRead["response"]>(
  id: ApiV1UserDeviceServerReadPathParams["id"],
  options: ApiV1UserDeviceServerRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserDeviceServerRead["response"], ApiV1UserDeviceServerRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceServerReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserDeviceServerRead["data"], ApiV1UserDeviceServerRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/server/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export function useApiV1UserDeviceServerReadInfinite<
  TData = InfiniteData<ApiV1UserDeviceServerRead["response"]>,
  TQueryData = ApiV1UserDeviceServerRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDeviceServerReadInfiniteQueryKey,
>(
  id: ApiV1UserDeviceServerReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserDeviceServerRead["response"], ApiV1UserDeviceServerRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceServerRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserDeviceServerRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceServerReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserDeviceServerRead["data"], ApiV1UserDeviceServerRead["error"], TData, any>({
    ...apiV1UserDeviceServerReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserDeviceServerRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
