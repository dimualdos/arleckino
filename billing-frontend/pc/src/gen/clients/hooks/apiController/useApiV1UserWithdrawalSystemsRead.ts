import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserWithdrawalSystemsReadQueryResponse, ApiV1UserWithdrawalSystemsReadPathParams } from "../../../models/ts/apiController/ApiV1UserWithdrawalSystemsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserWithdrawalSystemsReadClient = typeof client<ApiV1UserWithdrawalSystemsReadQueryResponse, never, never>
type ApiV1UserWithdrawalSystemsRead = {
  data: ApiV1UserWithdrawalSystemsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserWithdrawalSystemsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserWithdrawalSystemsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserWithdrawalSystemsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserWithdrawalSystemsReadClient>>
  }
}
export const apiV1UserWithdrawalSystemsReadQueryKey = (id: ApiV1UserWithdrawalSystemsReadPathParams["id"]) => [{ url: "/api/v1/user/withdrawal/systems/:id", params: { id: id } }] as const
export type ApiV1UserWithdrawalSystemsReadQueryKey = ReturnType<typeof apiV1UserWithdrawalSystemsReadQueryKey>
export function apiV1UserWithdrawalSystemsReadQueryOptions<TData = ApiV1UserWithdrawalSystemsRead["response"], TQueryData = ApiV1UserWithdrawalSystemsRead["response"]>(
  id: ApiV1UserWithdrawalSystemsReadPathParams["id"],
  options: ApiV1UserWithdrawalSystemsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserWithdrawalSystemsRead["response"], ApiV1UserWithdrawalSystemsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserWithdrawalSystemsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserWithdrawalSystemsRead["data"], ApiV1UserWithdrawalSystemsRead["error"]>({
        method: "get",
        url: `/api/v1/user/withdrawal/systems/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр системы для вывода средств
 * @link /api/v1/user/withdrawal/systems/:id */
export function useApiV1UserWithdrawalSystemsRead<
  TData = ApiV1UserWithdrawalSystemsRead["response"],
  TQueryData = ApiV1UserWithdrawalSystemsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserWithdrawalSystemsReadQueryKey,
>(
  id: ApiV1UserWithdrawalSystemsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserWithdrawalSystemsRead["response"], ApiV1UserWithdrawalSystemsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserWithdrawalSystemsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserWithdrawalSystemsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserWithdrawalSystemsReadQueryKey(id)
  const query = useQuery<ApiV1UserWithdrawalSystemsRead["data"], ApiV1UserWithdrawalSystemsRead["error"], TData, any>({
    ...apiV1UserWithdrawalSystemsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserWithdrawalSystemsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserWithdrawalSystemsReadInfiniteQueryKey = (id: ApiV1UserWithdrawalSystemsReadPathParams["id"]) => [{ url: "/api/v1/user/withdrawal/systems/:id", params: { id: id } }] as const
export type ApiV1UserWithdrawalSystemsReadInfiniteQueryKey = ReturnType<typeof apiV1UserWithdrawalSystemsReadInfiniteQueryKey>
export function apiV1UserWithdrawalSystemsReadInfiniteQueryOptions<TData = ApiV1UserWithdrawalSystemsRead["response"], TQueryData = ApiV1UserWithdrawalSystemsRead["response"]>(
  id: ApiV1UserWithdrawalSystemsReadPathParams["id"],
  options: ApiV1UserWithdrawalSystemsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserWithdrawalSystemsRead["response"], ApiV1UserWithdrawalSystemsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserWithdrawalSystemsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserWithdrawalSystemsRead["data"], ApiV1UserWithdrawalSystemsRead["error"]>({
        method: "get",
        url: `/api/v1/user/withdrawal/systems/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр системы для вывода средств
 * @link /api/v1/user/withdrawal/systems/:id */
export function useApiV1UserWithdrawalSystemsReadInfinite<
  TData = InfiniteData<ApiV1UserWithdrawalSystemsRead["response"]>,
  TQueryData = ApiV1UserWithdrawalSystemsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserWithdrawalSystemsReadInfiniteQueryKey,
>(
  id: ApiV1UserWithdrawalSystemsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserWithdrawalSystemsRead["response"], ApiV1UserWithdrawalSystemsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserWithdrawalSystemsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserWithdrawalSystemsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserWithdrawalSystemsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserWithdrawalSystemsRead["data"], ApiV1UserWithdrawalSystemsRead["error"], TData, any>({
    ...apiV1UserWithdrawalSystemsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserWithdrawalSystemsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
