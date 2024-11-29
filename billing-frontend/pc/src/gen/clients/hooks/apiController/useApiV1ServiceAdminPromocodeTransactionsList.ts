import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminPromocodeTransactionsListQueryResponse,
  ApiV1ServiceAdminPromocodeTransactionsListPathParams,
  ApiV1ServiceAdminPromocodeTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeTransactionsListClient = typeof client<ApiV1ServiceAdminPromocodeTransactionsListQueryResponse, never, never>
type ApiV1ServiceAdminPromocodeTransactionsList = {
  data: ApiV1ServiceAdminPromocodeTransactionsListQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceAdminPromocodeTransactionsListPathParams
  queryParams: ApiV1ServiceAdminPromocodeTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeTransactionsListClient>>
  }
}
export const apiV1ServiceAdminPromocodeTransactionsListQueryKey = (
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
) => [{ url: "/api/v1/service/admin/promocode/:id/transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminPromocodeTransactionsListQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeTransactionsListQueryKey>
export function apiV1ServiceAdminPromocodeTransactionsListQueryOptions<
  TData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
  TQueryData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
>(
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
  options: ApiV1ServiceAdminPromocodeTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeTransactionsList["response"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeTransactionsListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeTransactionsList["data"], ApiV1ServiceAdminPromocodeTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/${id}/transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список транзакций использования промокода
 * @link /api/v1/service/admin/promocode/:id/transactions */
export function useApiV1ServiceAdminPromocodeTransactionsList<
  TData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
  TQueryData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeTransactionsListQueryKey,
>(
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeTransactionsList["response"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminPromocodeTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeTransactionsListQueryKey(id, params)
  const query = useQuery<ApiV1ServiceAdminPromocodeTransactionsList["data"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeTransactionsListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminPromocodeTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey = (
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
) => [{ url: "/api/v1/service/admin/promocode/:id/transactions", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey>
export function apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryOptions<
  TData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
  TQueryData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
>(
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
  options: ApiV1ServiceAdminPromocodeTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeTransactionsList["response"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminPromocodeTransactionsList["data"], ApiV1ServiceAdminPromocodeTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/${id}/transactions`,
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
 * @summary Список транзакций использования промокода
 * @link /api/v1/service/admin/promocode/:id/transactions */
export function useApiV1ServiceAdminPromocodeTransactionsListInfinite<
  TData = InfiniteData<ApiV1ServiceAdminPromocodeTransactionsList["response"]>,
  TQueryData = ApiV1ServiceAdminPromocodeTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey,
>(
  id: ApiV1ServiceAdminPromocodeTransactionsListPathParams["id"],
  params?: ApiV1ServiceAdminPromocodeTransactionsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeTransactionsList["response"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1ServiceAdminPromocodeTransactionsList["data"], ApiV1ServiceAdminPromocodeTransactionsList["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeTransactionsListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
