import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminServerReadQueryResponse, ApiV1ServiceAdminServerReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminServerRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminServerReadClient = typeof client<ApiV1ServiceAdminServerReadQueryResponse, never, never>
type ApiV1ServiceAdminServerRead = {
  data: ApiV1ServiceAdminServerReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceAdminServerReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminServerReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminServerReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminServerReadClient>>
  }
}
export const apiV1ServiceAdminServerReadQueryKey = (id: ApiV1ServiceAdminServerReadPathParams["id"]) => [{ url: "/api/v1/service/admin/server/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminServerReadQueryKey = ReturnType<typeof apiV1ServiceAdminServerReadQueryKey>
export function apiV1ServiceAdminServerReadQueryOptions<TData = ApiV1ServiceAdminServerRead["response"], TQueryData = ApiV1ServiceAdminServerRead["response"]>(
  id: ApiV1ServiceAdminServerReadPathParams["id"],
  options: ApiV1ServiceAdminServerRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminServerRead["response"], ApiV1ServiceAdminServerRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminServerReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminServerRead["data"], ApiV1ServiceAdminServerRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/server/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export function useApiV1ServiceAdminServerRead<
  TData = ApiV1ServiceAdminServerRead["response"],
  TQueryData = ApiV1ServiceAdminServerRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminServerReadQueryKey,
>(
  id: ApiV1ServiceAdminServerReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminServerRead["response"], ApiV1ServiceAdminServerRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminServerRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminServerRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminServerReadQueryKey(id)
  const query = useQuery<ApiV1ServiceAdminServerRead["data"], ApiV1ServiceAdminServerRead["error"], TData, any>({
    ...apiV1ServiceAdminServerReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminServerRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminServerReadInfiniteQueryKey = (id: ApiV1ServiceAdminServerReadPathParams["id"]) => [{ url: "/api/v1/service/admin/server/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminServerReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminServerReadInfiniteQueryKey>
export function apiV1ServiceAdminServerReadInfiniteQueryOptions<TData = ApiV1ServiceAdminServerRead["response"], TQueryData = ApiV1ServiceAdminServerRead["response"]>(
  id: ApiV1ServiceAdminServerReadPathParams["id"],
  options: ApiV1ServiceAdminServerRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminServerRead["response"], ApiV1ServiceAdminServerRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminServerReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminServerRead["data"], ApiV1ServiceAdminServerRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/server/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export function useApiV1ServiceAdminServerReadInfinite<
  TData = InfiniteData<ApiV1ServiceAdminServerRead["response"]>,
  TQueryData = ApiV1ServiceAdminServerRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminServerReadInfiniteQueryKey,
>(
  id: ApiV1ServiceAdminServerReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminServerRead["response"], ApiV1ServiceAdminServerRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminServerRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminServerRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminServerReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ServiceAdminServerRead["data"], ApiV1ServiceAdminServerRead["error"], TData, any>({
    ...apiV1ServiceAdminServerReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminServerRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
