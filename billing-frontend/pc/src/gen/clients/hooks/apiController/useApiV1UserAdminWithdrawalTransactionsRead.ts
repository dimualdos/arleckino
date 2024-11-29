import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminWithdrawalTransactionsReadQueryResponse,
  ApiV1UserAdminWithdrawalTransactionsReadPathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalTransactionsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminWithdrawalTransactionsReadClient = typeof client<ApiV1UserAdminWithdrawalTransactionsReadQueryResponse, never, never>
type ApiV1UserAdminWithdrawalTransactionsRead = {
  data: ApiV1UserAdminWithdrawalTransactionsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminWithdrawalTransactionsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminWithdrawalTransactionsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminWithdrawalTransactionsReadClient>>
  }
}
export const apiV1UserAdminWithdrawalTransactionsReadQueryKey = (id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/transactions/:id", params: { id: id } }] as const
export type ApiV1UserAdminWithdrawalTransactionsReadQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalTransactionsReadQueryKey>
export function apiV1UserAdminWithdrawalTransactionsReadQueryOptions<TData = ApiV1UserAdminWithdrawalTransactionsRead["response"], TQueryData = ApiV1UserAdminWithdrawalTransactionsRead["response"]>(
  id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"],
  options: ApiV1UserAdminWithdrawalTransactionsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminWithdrawalTransactionsRead["response"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalTransactionsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminWithdrawalTransactionsRead["data"], ApiV1UserAdminWithdrawalTransactionsRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/transactions/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id */
export function useApiV1UserAdminWithdrawalTransactionsRead<
  TData = ApiV1UserAdminWithdrawalTransactionsRead["response"],
  TQueryData = ApiV1UserAdminWithdrawalTransactionsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalTransactionsReadQueryKey,
>(
  id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminWithdrawalTransactionsRead["response"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalTransactionsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalTransactionsReadQueryKey(id)
  const query = useQuery<ApiV1UserAdminWithdrawalTransactionsRead["data"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, any>({
    ...apiV1UserAdminWithdrawalTransactionsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey = (id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/withdrawal/transactions/:id", params: { id: id } }] as const
export type ApiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey>
export function apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryOptions<
  TData = ApiV1UserAdminWithdrawalTransactionsRead["response"],
  TQueryData = ApiV1UserAdminWithdrawalTransactionsRead["response"],
>(
  id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"],
  options: ApiV1UserAdminWithdrawalTransactionsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalTransactionsRead["response"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminWithdrawalTransactionsRead["data"], ApiV1UserAdminWithdrawalTransactionsRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/withdrawal/transactions/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных транзакции вывода средств пользователя
 * @link /api/v1/user/admin/withdrawal/transactions/:id */
export function useApiV1UserAdminWithdrawalTransactionsReadInfinite<
  TData = InfiniteData<ApiV1UserAdminWithdrawalTransactionsRead["response"]>,
  TQueryData = ApiV1UserAdminWithdrawalTransactionsRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey,
>(
  id: ApiV1UserAdminWithdrawalTransactionsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminWithdrawalTransactionsRead["response"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminWithdrawalTransactionsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminWithdrawalTransactionsRead["data"], ApiV1UserAdminWithdrawalTransactionsRead["error"], TData, any>({
    ...apiV1UserAdminWithdrawalTransactionsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminWithdrawalTransactionsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
