import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceDomainDefaultReadQueryResponse } from "../../../models/ts/apiController/ApiV1ServiceDomainDefaultRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceDomainDefaultReadClient = typeof client<ApiV1ServiceDomainDefaultReadQueryResponse, never, never>
type ApiV1ServiceDomainDefaultRead = {
  data: ApiV1ServiceDomainDefaultReadQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDomainDefaultReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDomainDefaultReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDomainDefaultReadClient>>
  }
}
export const apiV1ServiceDomainDefaultReadQueryKey = () => [{ url: "/api/v1/service/domain/default/" }] as const
export type ApiV1ServiceDomainDefaultReadQueryKey = ReturnType<typeof apiV1ServiceDomainDefaultReadQueryKey>
export function apiV1ServiceDomainDefaultReadQueryOptions<TData = ApiV1ServiceDomainDefaultRead["response"], TQueryData = ApiV1ServiceDomainDefaultRead["response"]>(
  options: ApiV1ServiceDomainDefaultRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceDomainDefaultRead["response"], ApiV1ServiceDomainDefaultRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDomainDefaultReadQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceDomainDefaultRead["data"], ApiV1ServiceDomainDefaultRead["error"]>({
        method: "get",
        url: `/api/v1/service/domain/default/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/domain/default/ */
export function useApiV1ServiceDomainDefaultRead<
  TData = ApiV1ServiceDomainDefaultRead["response"],
  TQueryData = ApiV1ServiceDomainDefaultRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDomainDefaultReadQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceDomainDefaultRead["response"], ApiV1ServiceDomainDefaultRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDomainDefaultRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceDomainDefaultRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDomainDefaultReadQueryKey()
  const query = useQuery<ApiV1ServiceDomainDefaultRead["data"], ApiV1ServiceDomainDefaultRead["error"], TData, any>({
    ...apiV1ServiceDomainDefaultReadQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceDomainDefaultRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceDomainDefaultReadInfiniteQueryKey = () => [{ url: "/api/v1/service/domain/default/" }] as const
export type ApiV1ServiceDomainDefaultReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceDomainDefaultReadInfiniteQueryKey>
export function apiV1ServiceDomainDefaultReadInfiniteQueryOptions<TData = ApiV1ServiceDomainDefaultRead["response"], TQueryData = ApiV1ServiceDomainDefaultRead["response"]>(
  options: ApiV1ServiceDomainDefaultRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceDomainDefaultRead["response"], ApiV1ServiceDomainDefaultRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDomainDefaultReadInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceDomainDefaultRead["data"], ApiV1ServiceDomainDefaultRead["error"]>({
        method: "get",
        url: `/api/v1/service/domain/default/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/domain/default/ */
export function useApiV1ServiceDomainDefaultReadInfinite<
  TData = InfiniteData<ApiV1ServiceDomainDefaultRead["response"]>,
  TQueryData = ApiV1ServiceDomainDefaultRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDomainDefaultReadInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceDomainDefaultRead["response"], ApiV1ServiceDomainDefaultRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDomainDefaultRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceDomainDefaultRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDomainDefaultReadInfiniteQueryKey()
  const query = useInfiniteQuery<ApiV1ServiceDomainDefaultRead["data"], ApiV1ServiceDomainDefaultRead["error"], TData, any>({
    ...apiV1ServiceDomainDefaultReadInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceDomainDefaultRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
