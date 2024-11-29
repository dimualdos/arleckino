import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1UserOttidListQueryResponse } from "../../../models/ts/apiExternalController/ApiExternalV1UserOttidList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1UserOttidListClient = typeof client<ApiExternalV1UserOttidListQueryResponse, never, never>
type ApiExternalV1UserOttidList = {
  data: ApiExternalV1UserOttidListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1UserOttidListClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1UserOttidListClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1UserOttidListClient>>
  }
}
export const apiExternalV1UserOttidListQueryKey = () => [{ url: "/api_external/v1/user/ottid/" }] as const
export type ApiExternalV1UserOttidListQueryKey = ReturnType<typeof apiExternalV1UserOttidListQueryKey>
export function apiExternalV1UserOttidListQueryOptions<TData = ApiExternalV1UserOttidList["response"], TQueryData = ApiExternalV1UserOttidList["response"]>(
  options: ApiExternalV1UserOttidList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1UserOttidList["response"], ApiExternalV1UserOttidList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1UserOttidListQueryKey()
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1UserOttidList["data"], ApiExternalV1UserOttidList["error"]>({
        method: "get",
        url: `/api_external/v1/user/ottid/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api_external/v1/user/ottid/ */
export function useApiExternalV1UserOttidList<
  TData = ApiExternalV1UserOttidList["response"],
  TQueryData = ApiExternalV1UserOttidList["response"],
  TQueryKey extends QueryKey = ApiExternalV1UserOttidListQueryKey,
>(
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1UserOttidList["response"], ApiExternalV1UserOttidList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1UserOttidList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1UserOttidList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1UserOttidListQueryKey()
  const query = useQuery<ApiExternalV1UserOttidList["data"], ApiExternalV1UserOttidList["error"], TData, any>({
    ...apiExternalV1UserOttidListQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1UserOttidList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1UserOttidListInfiniteQueryKey = () => [{ url: "/api_external/v1/user/ottid/" }] as const
export type ApiExternalV1UserOttidListInfiniteQueryKey = ReturnType<typeof apiExternalV1UserOttidListInfiniteQueryKey>
export function apiExternalV1UserOttidListInfiniteQueryOptions<TData = ApiExternalV1UserOttidList["response"], TQueryData = ApiExternalV1UserOttidList["response"]>(
  options: ApiExternalV1UserOttidList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1UserOttidList["response"], ApiExternalV1UserOttidList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1UserOttidListInfiniteQueryKey()
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1UserOttidList["data"], ApiExternalV1UserOttidList["error"]>({
        method: "get",
        url: `/api_external/v1/user/ottid/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api_external/v1/user/ottid/ */
export function useApiExternalV1UserOttidListInfinite<
  TData = InfiniteData<ApiExternalV1UserOttidList["response"]>,
  TQueryData = ApiExternalV1UserOttidList["response"],
  TQueryKey extends QueryKey = ApiExternalV1UserOttidListInfiniteQueryKey,
>(
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1UserOttidList["response"], ApiExternalV1UserOttidList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1UserOttidList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1UserOttidList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1UserOttidListInfiniteQueryKey()
  const query = useInfiniteQuery<ApiExternalV1UserOttidList["data"], ApiExternalV1UserOttidList["error"], TData, any>({
    ...apiExternalV1UserOttidListInfiniteQueryOptions<TData, TQueryData>(clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1UserOttidList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
