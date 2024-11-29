import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceDnsListListQueryResponse, ApiV1ServiceDnsListListQueryParams } from "../../../models/ts/apiController/ApiV1ServiceDnsListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceDnsListListClient = typeof client<ApiV1ServiceDnsListListQueryResponse, never, never>
type ApiV1ServiceDnsListList = {
  data: ApiV1ServiceDnsListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ServiceDnsListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceDnsListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceDnsListListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceDnsListListClient>>
  }
}
export const apiV1ServiceDnsListListQueryKey = (params?: ApiV1ServiceDnsListList["queryParams"]) => [{ url: "/api/v1/service/dns/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceDnsListListQueryKey = ReturnType<typeof apiV1ServiceDnsListListQueryKey>
export function apiV1ServiceDnsListListQueryOptions<TData = ApiV1ServiceDnsListList["response"], TQueryData = ApiV1ServiceDnsListList["response"]>(
  params?: ApiV1ServiceDnsListList["queryParams"],
  options: ApiV1ServiceDnsListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceDnsListList["response"], ApiV1ServiceDnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDnsListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceDnsListList["data"], ApiV1ServiceDnsListList["error"]>({
        method: "get",
        url: `/api/v1/service/dns/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.* **dns_contains_russian_letters**Имя {} содержит русские буквы.
 * @summary Список ДНС, создание нового ДНС
 * @link /api/v1/service/dns/list/ */
export function useApiV1ServiceDnsListList<TData = ApiV1ServiceDnsListList["response"], TQueryData = ApiV1ServiceDnsListList["response"], TQueryKey extends QueryKey = ApiV1ServiceDnsListListQueryKey>(
  params?: ApiV1ServiceDnsListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceDnsListList["response"], ApiV1ServiceDnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDnsListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceDnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDnsListListQueryKey(params)
  const query = useQuery<ApiV1ServiceDnsListList["data"], ApiV1ServiceDnsListList["error"], TData, any>({
    ...apiV1ServiceDnsListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceDnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceDnsListListInfiniteQueryKey = (params?: ApiV1ServiceDnsListList["queryParams"]) => [{ url: "/api/v1/service/dns/list/" }, ...(params ? [params] : [])] as const
export type ApiV1ServiceDnsListListInfiniteQueryKey = ReturnType<typeof apiV1ServiceDnsListListInfiniteQueryKey>
export function apiV1ServiceDnsListListInfiniteQueryOptions<TData = ApiV1ServiceDnsListList["response"], TQueryData = ApiV1ServiceDnsListList["response"]>(
  params?: ApiV1ServiceDnsListList["queryParams"],
  options: ApiV1ServiceDnsListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceDnsListList["response"], ApiV1ServiceDnsListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceDnsListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceDnsListList["data"], ApiV1ServiceDnsListList["error"]>({
        method: "get",
        url: `/api/v1/service/dns/list/`,
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
 * @description Список сообщений **message_type**:* **dns_and_domain_already_exists**Комбинация имени и домена уже существует.* **dns_contains_russian_letters**Имя {} содержит русские буквы.
 * @summary Список ДНС, создание нового ДНС
 * @link /api/v1/service/dns/list/ */
export function useApiV1ServiceDnsListListInfinite<
  TData = InfiniteData<ApiV1ServiceDnsListList["response"]>,
  TQueryData = ApiV1ServiceDnsListList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceDnsListListInfiniteQueryKey,
>(
  params?: ApiV1ServiceDnsListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceDnsListList["response"], ApiV1ServiceDnsListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceDnsListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceDnsListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceDnsListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ServiceDnsListList["data"], ApiV1ServiceDnsListList["error"], TData, any>({
    ...apiV1ServiceDnsListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceDnsListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
