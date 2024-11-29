import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserDeviceDnsReadQueryResponse, ApiV1UserDeviceDnsReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceDnsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserDeviceDnsReadClient = typeof client<ApiV1UserDeviceDnsReadQueryResponse, never, never>
type ApiV1UserDeviceDnsRead = {
  data: ApiV1UserDeviceDnsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserDeviceDnsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceDnsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceDnsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceDnsReadClient>>
  }
}
export const apiV1UserDeviceDnsReadQueryKey = (id: ApiV1UserDeviceDnsReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/dns/", params: { id: id } }] as const
export type ApiV1UserDeviceDnsReadQueryKey = ReturnType<typeof apiV1UserDeviceDnsReadQueryKey>
export function apiV1UserDeviceDnsReadQueryOptions<TData = ApiV1UserDeviceDnsRead["response"], TQueryData = ApiV1UserDeviceDnsRead["response"]>(
  id: ApiV1UserDeviceDnsReadPathParams["id"],
  options: ApiV1UserDeviceDnsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserDeviceDnsRead["response"], ApiV1UserDeviceDnsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceDnsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserDeviceDnsRead["data"], ApiV1UserDeviceDnsRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/dns/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export function useApiV1UserDeviceDnsRead<TData = ApiV1UserDeviceDnsRead["response"], TQueryData = ApiV1UserDeviceDnsRead["response"], TQueryKey extends QueryKey = ApiV1UserDeviceDnsReadQueryKey>(
  id: ApiV1UserDeviceDnsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserDeviceDnsRead["response"], ApiV1UserDeviceDnsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceDnsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserDeviceDnsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceDnsReadQueryKey(id)
  const query = useQuery<ApiV1UserDeviceDnsRead["data"], ApiV1UserDeviceDnsRead["error"], TData, any>({
    ...apiV1UserDeviceDnsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserDeviceDnsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserDeviceDnsReadInfiniteQueryKey = (id: ApiV1UserDeviceDnsReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/dns/", params: { id: id } }] as const
export type ApiV1UserDeviceDnsReadInfiniteQueryKey = ReturnType<typeof apiV1UserDeviceDnsReadInfiniteQueryKey>
export function apiV1UserDeviceDnsReadInfiniteQueryOptions<TData = ApiV1UserDeviceDnsRead["response"], TQueryData = ApiV1UserDeviceDnsRead["response"]>(
  id: ApiV1UserDeviceDnsReadPathParams["id"],
  options: ApiV1UserDeviceDnsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserDeviceDnsRead["response"], ApiV1UserDeviceDnsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceDnsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserDeviceDnsRead["data"], ApiV1UserDeviceDnsRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/dns/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_not_found_by_id**DNS с указанным ID не обнаружен.
 * @summary Просмотр, изменение и удаление DNS для устройства пользователя
 * @link /api/v1/user/device/:id/dns/ */
export function useApiV1UserDeviceDnsReadInfinite<
  TData = InfiniteData<ApiV1UserDeviceDnsRead["response"]>,
  TQueryData = ApiV1UserDeviceDnsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDeviceDnsReadInfiniteQueryKey,
>(
  id: ApiV1UserDeviceDnsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserDeviceDnsRead["response"], ApiV1UserDeviceDnsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceDnsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserDeviceDnsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceDnsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserDeviceDnsRead["data"], ApiV1UserDeviceDnsRead["error"], TData, any>({
    ...apiV1UserDeviceDnsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserDeviceDnsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
