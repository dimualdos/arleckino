import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1DnsListListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1DnsListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1DnsListListClient = typeof client<ApiExternalV1DnsListListQueryResponse, never, never>
type ApiExternalV1DnsListList = {
  data: ApiExternalV1DnsListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1DnsListListClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1DnsListListClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1DnsListListClient>>
  }
}
export const apiExternalV1DnsListListQueryKey = () => [{ url: "/api_external/v1/dns-list/" }] as const
export type ApiExternalV1DnsListListQueryKey = ReturnType<typeof apiExternalV1DnsListListQueryKey>
export function apiExternalV1DnsListListQueryOptions<TData = ApiExternalV1DnsListList["response"], TQueryData = ApiExternalV1DnsListList["response"]>(
  options: ApiExternalV1DnsListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1DnsListList["response"], ApiExternalV1DnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1DnsListListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1DnsListList["data"], ApiExternalV1DnsListList["error"]>({
        method: "get",
        url: `/api_external/v1/dns-list/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api_external/v1/dns-list/ */
export function useApiExternalV1DnsListList<
  TData = ApiExternalV1DnsListList["response"],
  TQueryData = ApiExternalV1DnsListList["response"],
  TQueryKey extends QueryKey = ApiExternalV1DnsListListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1DnsListList["response"], ApiExternalV1DnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1DnsListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1DnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1DnsListListQueryKey()
  const query = useQuery<ApiExternalV1DnsListList["data"], ApiExternalV1DnsListList["error"], TData, any>({
    ...apiExternalV1DnsListListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1DnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1DnsListListInfiniteQueryKey = () => [{ url: "/api_external/v1/dns-list/" }] as const
export type ApiExternalV1DnsListListInfiniteQueryKey = ReturnType<typeof apiExternalV1DnsListListInfiniteQueryKey>
export function apiExternalV1DnsListListInfiniteQueryOptions<TData = ApiExternalV1DnsListList["response"], TQueryData = ApiExternalV1DnsListList["response"]>(
  options: ApiExternalV1DnsListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1DnsListList["response"], ApiExternalV1DnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1DnsListListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1DnsListList["data"], ApiExternalV1DnsListList["error"]>({
        method: "get",
        url: `/api_external/v1/dns-list/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api_external/v1/dns-list/ */
export function useApiExternalV1DnsListListInfinite<
  TData = InfiniteData<ApiExternalV1DnsListList["response"]>,
  TQueryData = ApiExternalV1DnsListList["response"],
  TQueryKey extends QueryKey = ApiExternalV1DnsListListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1DnsListList["response"], ApiExternalV1DnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1DnsListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1DnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1DnsListListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiExternalV1DnsListList["data"], ApiExternalV1DnsListList["error"], TData, any>({
    ...apiExternalV1DnsListListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1DnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
