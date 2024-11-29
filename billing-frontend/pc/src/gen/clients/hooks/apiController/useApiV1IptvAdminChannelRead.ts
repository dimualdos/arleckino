import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelReadQueryResponse, ApiV1IptvAdminChannelReadPathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminChannelReadClient = typeof client<ApiV1IptvAdminChannelReadQueryResponse, never, never>
type ApiV1IptvAdminChannelRead = {
  data: ApiV1IptvAdminChannelReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1IptvAdminChannelReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelReadClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelReadClient>>
  }
}
export const apiV1IptvAdminChannelReadQueryKey = (id: ApiV1IptvAdminChannelReadPathParams["id"]) => [{ url: "/api/v1/iptv/admin/channel/:id/", params: { id: id } }] as const
export type ApiV1IptvAdminChannelReadQueryKey = ReturnType<typeof apiV1IptvAdminChannelReadQueryKey>
export function apiV1IptvAdminChannelReadQueryOptions<TData = ApiV1IptvAdminChannelRead["response"], TQueryData = ApiV1IptvAdminChannelRead["response"]>(
  id: ApiV1IptvAdminChannelReadPathParams["id"],
  options: ApiV1IptvAdminChannelRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminChannelRead["response"], ApiV1IptvAdminChannelRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminChannelRead["data"], ApiV1IptvAdminChannelRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export function useApiV1IptvAdminChannelRead<
  TData = ApiV1IptvAdminChannelRead["response"],
  TQueryData = ApiV1IptvAdminChannelRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelReadQueryKey,
>(
  id: ApiV1IptvAdminChannelReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminChannelRead["response"], ApiV1IptvAdminChannelRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminChannelRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelReadQueryKey(id)
  const query = useQuery<ApiV1IptvAdminChannelRead["data"], ApiV1IptvAdminChannelRead["error"], TData, any>({
    ...apiV1IptvAdminChannelReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminChannelRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminChannelReadInfiniteQueryKey = (id: ApiV1IptvAdminChannelReadPathParams["id"]) => [{ url: "/api/v1/iptv/admin/channel/:id/", params: { id: id } }] as const
export type ApiV1IptvAdminChannelReadInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminChannelReadInfiniteQueryKey>
export function apiV1IptvAdminChannelReadInfiniteQueryOptions<TData = ApiV1IptvAdminChannelRead["response"], TQueryData = ApiV1IptvAdminChannelRead["response"]>(
  id: ApiV1IptvAdminChannelReadPathParams["id"],
  options: ApiV1IptvAdminChannelRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminChannelRead["response"], ApiV1IptvAdminChannelRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminChannelRead["data"], ApiV1IptvAdminChannelRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export function useApiV1IptvAdminChannelReadInfinite<
  TData = InfiniteData<ApiV1IptvAdminChannelRead["response"]>,
  TQueryData = ApiV1IptvAdminChannelRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelReadInfiniteQueryKey,
>(
  id: ApiV1IptvAdminChannelReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminChannelRead["response"], ApiV1IptvAdminChannelRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1IptvAdminChannelRead["data"], ApiV1IptvAdminChannelRead["error"], TData, any>({
    ...apiV1IptvAdminChannelReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
