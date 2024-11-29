import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingPaymentTransactionListListQueryResponse, ApiV1BillingPaymentTransactionListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionListList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingPaymentTransactionListListClient = typeof client<ApiV1BillingPaymentTransactionListListQueryResponse, never, never>
type ApiV1BillingPaymentTransactionListList = {
  data: ApiV1BillingPaymentTransactionListListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1BillingPaymentTransactionListListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentTransactionListListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentTransactionListListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentTransactionListListClient>>
  }
}
export const apiV1BillingPaymentTransactionListListQueryKey = (params?: ApiV1BillingPaymentTransactionListList["queryParams"]) =>
  [{ url: "/api/v1/billing/payment/transaction/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentTransactionListListQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionListListQueryKey>
export function apiV1BillingPaymentTransactionListListQueryOptions<TData = ApiV1BillingPaymentTransactionListList["response"], TQueryData = ApiV1BillingPaymentTransactionListList["response"]>(
  params?: ApiV1BillingPaymentTransactionListList["queryParams"],
  options: ApiV1BillingPaymentTransactionListList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingPaymentTransactionListList["response"], ApiV1BillingPaymentTransactionListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionListListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingPaymentTransactionListList["data"], ApiV1BillingPaymentTransactionListList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/list/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список всех платежных транзакций текущего пользователя
 * @link /api/v1/billing/payment/transaction/list/ */
export function useApiV1BillingPaymentTransactionListList<
  TData = ApiV1BillingPaymentTransactionListList["response"],
  TQueryData = ApiV1BillingPaymentTransactionListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionListListQueryKey,
>(
  params?: ApiV1BillingPaymentTransactionListList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingPaymentTransactionListList["response"], ApiV1BillingPaymentTransactionListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionListList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingPaymentTransactionListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionListListQueryKey(params)
  const query = useQuery<ApiV1BillingPaymentTransactionListList["data"], ApiV1BillingPaymentTransactionListList["error"], TData, any>({
    ...apiV1BillingPaymentTransactionListListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingPaymentTransactionListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingPaymentTransactionListListInfiniteQueryKey = (params?: ApiV1BillingPaymentTransactionListList["queryParams"]) =>
  [{ url: "/api/v1/billing/payment/transaction/list/" }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentTransactionListListInfiniteQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionListListInfiniteQueryKey>
export function apiV1BillingPaymentTransactionListListInfiniteQueryOptions<TData = ApiV1BillingPaymentTransactionListList["response"], TQueryData = ApiV1BillingPaymentTransactionListList["response"]>(
  params?: ApiV1BillingPaymentTransactionListList["queryParams"],
  options: ApiV1BillingPaymentTransactionListList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionListList["response"], ApiV1BillingPaymentTransactionListList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionListListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingPaymentTransactionListList["data"], ApiV1BillingPaymentTransactionListList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/list/`,
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
 * @summary Список всех платежных транзакций текущего пользователя
 * @link /api/v1/billing/payment/transaction/list/ */
export function useApiV1BillingPaymentTransactionListListInfinite<
  TData = InfiniteData<ApiV1BillingPaymentTransactionListList["response"]>,
  TQueryData = ApiV1BillingPaymentTransactionListList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionListListInfiniteQueryKey,
>(
  params?: ApiV1BillingPaymentTransactionListList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionListList["response"], ApiV1BillingPaymentTransactionListList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionListList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionListList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionListListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1BillingPaymentTransactionListList["data"], ApiV1BillingPaymentTransactionListList["error"], TData, any>({
    ...apiV1BillingPaymentTransactionListListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionListList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
