import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminDnsListListQueryResponse, ApiV1ServiceAdminDnsListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDnsListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminDnsListListClient = typeof client<ApiV1ServiceAdminDnsListListQueryResponse, never, never>
type ApiV1ServiceAdminDnsListList = {
  data: ApiV1ServiceAdminDnsListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceAdminDnsListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDnsListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDnsListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDnsListListClient>>
  }
}
export const apiV1ServiceAdminDnsListListQueryKey = (params?: ApiV1ServiceAdminDnsListList["queryParams"]) => [{ url: "/api/v1/service/admin/dns/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminDnsListListQueryKey = ReturnType<typeof apiV1ServiceAdminDnsListListQueryKey>
export function apiV1ServiceAdminDnsListListQueryOptions<TData = ApiV1ServiceAdminDnsListList["response"], TQueryData = ApiV1ServiceAdminDnsListList["response"]>(
  params?: ApiV1ServiceAdminDnsListList["queryParams"],
  options: ApiV1ServiceAdminDnsListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminDnsListList["response"], ApiV1ServiceAdminDnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDnsListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminDnsListList["data"], ApiV1ServiceAdminDnsListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/dns/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export function useApiV1ServiceAdminDnsListList<
  TData = ApiV1ServiceAdminDnsListList["response"],
  TQueryData = ApiV1ServiceAdminDnsListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDnsListListQueryKey,
>(
  params?: ApiV1ServiceAdminDnsListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminDnsListList["response"], ApiV1ServiceAdminDnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDnsListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminDnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDnsListListQueryKey(params)
  const query = useQuery<ApiV1ServiceAdminDnsListList["data"], ApiV1ServiceAdminDnsListList["error"], TData, any>({
    ...apiV1ServiceAdminDnsListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminDnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminDnsListListInfiniteQueryKey = (params?: ApiV1ServiceAdminDnsListList["queryParams"]) => [{ url: "/api/v1/service/admin/dns/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminDnsListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminDnsListListInfiniteQueryKey>
export function apiV1ServiceAdminDnsListListInfiniteQueryOptions<TData = ApiV1ServiceAdminDnsListList["response"], TQueryData = ApiV1ServiceAdminDnsListList["response"]>(
  params?: ApiV1ServiceAdminDnsListList["queryParams"],
  options: ApiV1ServiceAdminDnsListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminDnsListList["response"], ApiV1ServiceAdminDnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDnsListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminDnsListList["data"], ApiV1ServiceAdminDnsListList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/dns/list/`,
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
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.
 * @summary Список DNS, создание нового DNS, удаление
 * @link /api/v1/service/admin/dns/list/ */
export function useApiV1ServiceAdminDnsListListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminDnsListList["response"]>,
  TQueryData = ApiV1ServiceAdminDnsListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDnsListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceAdminDnsListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminDnsListList["response"], ApiV1ServiceAdminDnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDnsListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminDnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDnsListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceAdminDnsListList["data"], ApiV1ServiceAdminDnsListList["error"], TData, any>({
    ...apiV1ServiceAdminDnsListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminDnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
