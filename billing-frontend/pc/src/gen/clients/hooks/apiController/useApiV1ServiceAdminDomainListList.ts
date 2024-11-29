import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminDomainListListQueryResponse, ApiV1ServiceAdminDomainListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainListListClient = typeof client<ApiV1ServiceAdminDomainListListQueryResponse, never, never>
type ApiV1ServiceAdminDomainListList = {
  data: ApiV1ServiceAdminDomainListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceAdminDomainListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainListListClient>>
  }
}
export const apiV1ServiceAdminDomainListListQueryKey = (params?: ApiV1ServiceAdminDomainListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/domain/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminDomainListListQueryKey = ReturnType<typeof apiV1ServiceAdminDomainListListQueryKey>
export function apiV1ServiceAdminDomainListListQueryOptions<TData = ApiV1ServiceAdminDomainListList["response"], TQueryData = ApiV1ServiceAdminDomainListList["response"]>(
  params?: ApiV1ServiceAdminDomainListList["queryParams"],
  options: ApiV1ServiceAdminDomainListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminDomainListList["response"], ApiV1ServiceAdminDomainListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDomainListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminDomainListList["data"], ApiV1ServiceAdminDomainListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/domain/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список доменов, создание нового домена
 * @link /api/v1/service/admin/domain/list/ */
export function useApiV1ServiceAdminDomainListList<
  TData = ApiV1ServiceAdminDomainListList["response"],
  TQueryData = ApiV1ServiceAdminDomainListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDomainListListQueryKey,
>(
  params?: ApiV1ServiceAdminDomainListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminDomainListList["response"], ApiV1ServiceAdminDomainListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDomainListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminDomainListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDomainListListQueryKey(params)
  const query = useQuery<ApiV1ServiceAdminDomainListList["data"], ApiV1ServiceAdminDomainListList["error"], TData, any>({
    ...apiV1ServiceAdminDomainListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminDomainListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminDomainListListInfiniteQueryKey = (params?: ApiV1ServiceAdminDomainListList["queryParams"]) =>
  [{ url: "/api/v1/service/admin/domain/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminDomainListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminDomainListListInfiniteQueryKey>
export function apiV1ServiceAdminDomainListListInfiniteQueryOptions<TData = ApiV1ServiceAdminDomainListList["response"], TQueryData = ApiV1ServiceAdminDomainListList["response"]>(
  params?: ApiV1ServiceAdminDomainListList["queryParams"],
  options: ApiV1ServiceAdminDomainListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminDomainListList["response"], ApiV1ServiceAdminDomainListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDomainListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminDomainListList["data"], ApiV1ServiceAdminDomainListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/domain/list/`,
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
 * @description Список доменов, создание нового домена
 * @link /api/v1/service/admin/domain/list/ */
export function useApiV1ServiceAdminDomainListListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminDomainListList["response"]>,
  TQueryData = ApiV1ServiceAdminDomainListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDomainListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceAdminDomainListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminDomainListList["response"], ApiV1ServiceAdminDomainListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDomainListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminDomainListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDomainListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceAdminDomainListList["data"], ApiV1ServiceAdminDomainListList["error"], TData, any>({
    ...apiV1ServiceAdminDomainListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminDomainListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
