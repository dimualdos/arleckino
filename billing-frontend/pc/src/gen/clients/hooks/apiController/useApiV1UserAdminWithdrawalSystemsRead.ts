import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminWithdrawalSystemsReadQueryResponse, ApiV1UserAdminWithdrawalSystemsReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalSystemsReadClient = typeof client<ApiV1UserAdminWithdrawalSystemsReadQueryResponse, never, never>
type ApiV1UserAdminWithdrawalSystemsRead = {
  data: ApiV1UserAdminWithdrawalSystemsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminWithdrawalSystemsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalSystemsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalSystemsReadClient>>
  }
}
export const apiV1UserAdminWithdrawalSystemsReadQueryKey = (id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/systems/:id", params: { id: id } }] as const
export type ApiV1UserAdminWithdrawalSystemsReadQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalSystemsReadQueryKey>
export function apiV1UserAdminWithdrawalSystemsReadQueryOptions<TData = ApiV1UserAdminWithdrawalSystemsRead["response"], TQueryData = ApiV1UserAdminWithdrawalSystemsRead["response"]>(
  id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"],
  options: ApiV1UserAdminWithdrawalSystemsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminWithdrawalSystemsRead["response"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalSystemsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsRead["data"], ApiV1UserAdminWithdrawalSystemsRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/systems/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export function useApiV1UserAdminWithdrawalSystemsRead<
  TData = ApiV1UserAdminWithdrawalSystemsRead["response"],
  TQueryData = ApiV1UserAdminWithdrawalSystemsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalSystemsReadQueryKey,
>(
  id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminWithdrawalSystemsRead["response"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalSystemsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminWithdrawalSystemsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalSystemsReadQueryKey(id)
  const query = useQuery<ApiV1UserAdminWithdrawalSystemsRead["data"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, any>({
    ...apiV1UserAdminWithdrawalSystemsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminWithdrawalSystemsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey = (id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/systems/:id", params: { id: id } }] as const
export type ApiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey>
export function apiV1UserAdminWithdrawalSystemsReadInfiniteQueryOptions<TData = ApiV1UserAdminWithdrawalSystemsRead["response"], TQueryData = ApiV1UserAdminWithdrawalSystemsRead["response"]>(
  id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"],
  options: ApiV1UserAdminWithdrawalSystemsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalSystemsRead["response"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminWithdrawalSystemsRead["data"], ApiV1UserAdminWithdrawalSystemsRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/systems/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр, изменение и удаление системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems/:id */
export function useApiV1UserAdminWithdrawalSystemsReadInfinite<
  TData = InfiniteData<ApiV1UserAdminWithdrawalSystemsRead["response"]>,
  TQueryData = ApiV1UserAdminWithdrawalSystemsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey,
>(
  id: ApiV1UserAdminWithdrawalSystemsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalSystemsRead["response"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalSystemsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalSystemsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalSystemsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminWithdrawalSystemsRead["data"], ApiV1UserAdminWithdrawalSystemsRead["error"], TData, any>({
    ...apiV1UserAdminWithdrawalSystemsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalSystemsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
