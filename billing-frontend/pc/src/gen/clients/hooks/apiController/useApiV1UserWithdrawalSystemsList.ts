import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserWithdrawalSystemsListQueryResponse, ApiV1UserWithdrawalSystemsListQueryParams } from "../../../models/ts/apiController/ApiV1UserWithdrawalSystemsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserWithdrawalSystemsListClient = typeof client<ApiV1UserWithdrawalSystemsListQueryResponse, never, never>
type ApiV1UserWithdrawalSystemsList = {
  data: ApiV1UserWithdrawalSystemsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserWithdrawalSystemsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserWithdrawalSystemsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserWithdrawalSystemsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserWithdrawalSystemsListClient>>
  }
}
export const apiV1UserWithdrawalSystemsListQueryKey = (params?: ApiV1UserWithdrawalSystemsList["queryParams"]) => [{ url: "/api/v1/user/withdrawal/systems" }, ...(params ? [params] : [])] as const
export type ApiV1UserWithdrawalSystemsListQueryKey = ReturnType<typeof apiV1UserWithdrawalSystemsListQueryKey>
export function apiV1UserWithdrawalSystemsListQueryOptions<TData = ApiV1UserWithdrawalSystemsList["response"], TQueryData = ApiV1UserWithdrawalSystemsList["response"]>(
  params?: ApiV1UserWithdrawalSystemsList["queryParams"],
  options: ApiV1UserWithdrawalSystemsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserWithdrawalSystemsList["response"], ApiV1UserWithdrawalSystemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserWithdrawalSystemsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserWithdrawalSystemsList["data"], ApiV1UserWithdrawalSystemsList["error"]>({
        method: "get",
        url: `/api/v1/user/withdrawal/systems`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список систем для вывода средств
 * @link /api/v1/user/withdrawal/systems */
export function useApiV1UserWithdrawalSystemsList<
  TData = ApiV1UserWithdrawalSystemsList["response"],
  TQueryData = ApiV1UserWithdrawalSystemsList["response"],
  TQueryKey extends QueryKey = ApiV1UserWithdrawalSystemsListQueryKey,
>(
  params?: ApiV1UserWithdrawalSystemsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserWithdrawalSystemsList["response"], ApiV1UserWithdrawalSystemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserWithdrawalSystemsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserWithdrawalSystemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserWithdrawalSystemsListQueryKey(params)
  const query = useQuery<ApiV1UserWithdrawalSystemsList["data"], ApiV1UserWithdrawalSystemsList["error"], TData, any>({
    ...apiV1UserWithdrawalSystemsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserWithdrawalSystemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserWithdrawalSystemsListInfiniteQueryKey = (params?: ApiV1UserWithdrawalSystemsList["queryParams"]) =>
  [{ url: "/api/v1/user/withdrawal/systems" }, ...(params ? [params] : [])] as const
export type ApiV1UserWithdrawalSystemsListInfiniteQueryKey = ReturnType<typeof apiV1UserWithdrawalSystemsListInfiniteQueryKey>
export function apiV1UserWithdrawalSystemsListInfiniteQueryOptions<TData = ApiV1UserWithdrawalSystemsList["response"], TQueryData = ApiV1UserWithdrawalSystemsList["response"]>(
  params?: ApiV1UserWithdrawalSystemsList["queryParams"],
  options: ApiV1UserWithdrawalSystemsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserWithdrawalSystemsList["response"], ApiV1UserWithdrawalSystemsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserWithdrawalSystemsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserWithdrawalSystemsList["data"], ApiV1UserWithdrawalSystemsList["error"]>({
        method: "get",
        url: `/api/v1/user/withdrawal/systems`,
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
 * @summary Список систем для вывода средств
 * @link /api/v1/user/withdrawal/systems */
export function useApiV1UserWithdrawalSystemsListInfinite<
  TData = InfiniteData<ApiV1UserWithdrawalSystemsList["response"]>,
  TQueryData = ApiV1UserWithdrawalSystemsList["response"],
  TQueryKey extends QueryKey = ApiV1UserWithdrawalSystemsListInfiniteQueryKey,
>(
  params?: ApiV1UserWithdrawalSystemsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserWithdrawalSystemsList["response"], ApiV1UserWithdrawalSystemsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserWithdrawalSystemsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserWithdrawalSystemsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserWithdrawalSystemsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserWithdrawalSystemsList["data"], ApiV1UserWithdrawalSystemsList["error"], TData, any>({
    ...apiV1UserWithdrawalSystemsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserWithdrawalSystemsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
