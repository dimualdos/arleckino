import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceDnsReadQueryResponse, ApiV1ServiceDnsReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceDnsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceDnsReadClient = typeof client<ApiV1ServiceDnsReadQueryResponse, never, never>
type ApiV1ServiceDnsRead = {
  data: ApiV1ServiceDnsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceDnsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsReadClient>>
  }
}
export const apiV1ServiceDnsReadQueryKey = (id: ApiV1ServiceDnsReadPathParams["id"]) => [{ url: "/api/v1/service/dns/:id/", params: { id: id } }] as const
export type ApiV1ServiceDnsReadQueryKey = ReturnType<typeof apiV1ServiceDnsReadQueryKey>
export function apiV1ServiceDnsReadQueryOptions<TData = ApiV1ServiceDnsRead["response"], TQueryData = ApiV1ServiceDnsRead["response"]>(
  id: ApiV1ServiceDnsReadPathParams["id"],
  options: ApiV1ServiceDnsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceDnsRead["response"], ApiV1ServiceDnsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDnsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceDnsRead["data"], ApiV1ServiceDnsRead["error"]>({
        method: "get",
        url: `/api/v1/service/dns/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export function useApiV1ServiceDnsRead<TData = ApiV1ServiceDnsRead["response"], TQueryData = ApiV1ServiceDnsRead["response"], TQueryKey extends QueryKey = ApiV1ServiceDnsReadQueryKey>(
  id: ApiV1ServiceDnsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceDnsRead["response"], ApiV1ServiceDnsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDnsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceDnsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDnsReadQueryKey(id)
  const query = useQuery<ApiV1ServiceDnsRead["data"], ApiV1ServiceDnsRead["error"], TData, any>({
    ...apiV1ServiceDnsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceDnsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceDnsReadInfiniteQueryKey = (id: ApiV1ServiceDnsReadPathParams["id"]) => [{ url: "/api/v1/service/dns/:id/", params: { id: id } }] as const
export type ApiV1ServiceDnsReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceDnsReadInfiniteQueryKey>
export function apiV1ServiceDnsReadInfiniteQueryOptions<TData = ApiV1ServiceDnsRead["response"], TQueryData = ApiV1ServiceDnsRead["response"]>(
  id: ApiV1ServiceDnsReadPathParams["id"],
  options: ApiV1ServiceDnsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceDnsRead["response"], ApiV1ServiceDnsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDnsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceDnsRead["data"], ApiV1ServiceDnsRead["error"]>({
        method: "get",
        url: `/api/v1/service/dns/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление ДНС
 * @link /api/v1/service/dns/:id/ */
export function useApiV1ServiceDnsReadInfinite<
  TData = InfiniteData<ApiV1ServiceDnsRead["response"]>,
  TQueryData = ApiV1ServiceDnsRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDnsReadInfiniteQueryKey,
>(
  id: ApiV1ServiceDnsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceDnsRead["response"], ApiV1ServiceDnsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDnsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceDnsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDnsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ServiceDnsRead["data"], ApiV1ServiceDnsRead["error"], TData, any>({
    ...apiV1ServiceDnsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceDnsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
