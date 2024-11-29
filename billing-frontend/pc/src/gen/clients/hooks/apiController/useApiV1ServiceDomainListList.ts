import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceDomainListListQueryResponse, ApiV1ServiceDomainListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceDomainListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceDomainListListClient = typeof client<ApiV1ServiceDomainListListQueryResponse, never, never>
type ApiV1ServiceDomainListList = {
  data: ApiV1ServiceDomainListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceDomainListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDomainListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDomainListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDomainListListClient>>
  }
}
export const apiV1ServiceDomainListListQueryKey = (params?: ApiV1ServiceDomainListList["queryParams"]) => [{ url: "/api/v1/service/domain/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceDomainListListQueryKey = ReturnType<typeof apiV1ServiceDomainListListQueryKey>
export function apiV1ServiceDomainListListQueryOptions<TData = ApiV1ServiceDomainListList["response"], TQueryData = ApiV1ServiceDomainListList["response"]>(
  params?: ApiV1ServiceDomainListList["queryParams"],
  options: ApiV1ServiceDomainListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceDomainListList["response"], ApiV1ServiceDomainListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDomainListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceDomainListList["data"], ApiV1ServiceDomainListList["error"]>({
        method: "get",
        url: `/api/v1/service/domain/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/domain/list/ */
export function useApiV1ServiceDomainListList<
  TData = ApiV1ServiceDomainListList["response"],
  TQueryData = ApiV1ServiceDomainListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDomainListListQueryKey,
>(
  params?: ApiV1ServiceDomainListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceDomainListList["response"], ApiV1ServiceDomainListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDomainListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceDomainListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDomainListListQueryKey(params)
  const query = useQuery<ApiV1ServiceDomainListList["data"], ApiV1ServiceDomainListList["error"], TData, any>({
    ...apiV1ServiceDomainListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceDomainListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceDomainListListInfiniteQueryKey = (params?: ApiV1ServiceDomainListList["queryParams"]) => [{ url: "/api/v1/service/domain/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceDomainListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceDomainListListInfiniteQueryKey>
export function apiV1ServiceDomainListListInfiniteQueryOptions<TData = ApiV1ServiceDomainListList["response"], TQueryData = ApiV1ServiceDomainListList["response"]>(
  params?: ApiV1ServiceDomainListList["queryParams"],
  options: ApiV1ServiceDomainListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceDomainListList["response"], ApiV1ServiceDomainListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDomainListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceDomainListList["data"], ApiV1ServiceDomainListList["error"]>({
        method: "get",
        url: `/api/v1/service/domain/list/`,
        ...options,
        params: {
          ...params,
          ["id"]: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
  }
}
/**
 * @link /api/v1/service/domain/list/ */
export function useApiV1ServiceDomainListListInfinite<
  TData = InfiniteData<ApiV1ServiceDomainListList["response"]>,
  TQueryData = ApiV1ServiceDomainListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDomainListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceDomainListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceDomainListList["response"], ApiV1ServiceDomainListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDomainListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceDomainListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDomainListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceDomainListList["data"], ApiV1ServiceDomainListList["error"], TData, any>({
    ...apiV1ServiceDomainListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceDomainListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
