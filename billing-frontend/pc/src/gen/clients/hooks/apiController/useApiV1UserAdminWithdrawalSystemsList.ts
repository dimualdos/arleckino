import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminWithdrawalSystemsListQueryResponse, ApiV1UserAdminWithdrawalSystemsListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsListClient = typeof client<ApiV1UserAdminWithdrawalSystemsListQueryResponse, never, never>
type ApiV1UserAdminWithdrawalSystemsList = {
  data: ApiV1UserAdminWithdrawalSystemsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminWithdrawalSystemsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsListClient>>
  }
}
export const apiV1UserAdminWithdrawalSystemsListQueryKey = (params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/systems" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminWithdrawalSystemsListQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalSystemsListQueryKey>
export function apiV1UserAdminWithdrawalSystemsListQueryOptions<TData = ApiV1UserAdminWithdrawalSystemsList["response"], TQueryData = ApiV1UserAdminWithdrawalSystemsList["response"]>(
  params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"],
  options: ApiV1UserAdminWithdrawalSystemsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminWithdrawalSystemsList["response"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalSystemsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsList["data"], ApiV1UserAdminWithdrawalSystemsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/systems`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список систем для вывода средств, создание новой системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems */
export function useApiV1UserAdminWithdrawalSystemsList<
  TData = ApiV1UserAdminWithdrawalSystemsList["response"],
  TQueryData = ApiV1UserAdminWithdrawalSystemsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalSystemsListQueryKey,
>(
  params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminWithdrawalSystemsList["response"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalSystemsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminWithdrawalSystemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalSystemsListQueryKey(params)
  const query = useQuery<ApiV1UserAdminWithdrawalSystemsList["data"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, any>({
    ...apiV1UserAdminWithdrawalSystemsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminWithdrawalSystemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminWithdrawalSystemsListInfiniteQueryKey = (params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/systems" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminWithdrawalSystemsListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalSystemsListInfiniteQueryKey>
export function apiV1UserAdminWithdrawalSystemsListInfiniteQueryOptions<TData = ApiV1UserAdminWithdrawalSystemsList["response"], TQueryData = ApiV1UserAdminWithdrawalSystemsList["response"]>(
  params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"],
  options: ApiV1UserAdminWithdrawalSystemsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalSystemsList["response"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalSystemsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsList["data"], ApiV1UserAdminWithdrawalSystemsList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/systems`,
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
 * @description .
 * @summary Список систем для вывода средств, создание новой системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems */
export function useApiV1UserAdminWithdrawalSystemsListInfinite<
  TData = InfiniteData<ApiV1UserAdminWithdrawalSystemsList["response"]>,
  TQueryData = ApiV1UserAdminWithdrawalSystemsList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalSystemsListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminWithdrawalSystemsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalSystemsList["response"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalSystemsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalSystemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalSystemsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminWithdrawalSystemsList["data"], ApiV1UserAdminWithdrawalSystemsList["error"], TData, any>({
    ...apiV1UserAdminWithdrawalSystemsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalSystemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
