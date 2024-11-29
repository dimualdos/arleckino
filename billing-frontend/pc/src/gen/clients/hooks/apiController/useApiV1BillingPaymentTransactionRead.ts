import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingPaymentTransactionReadQueryResponse, ApiV1BillingPaymentTransactionReadPathParams } from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingPaymentTransactionReadClient = typeof client<ApiV1BillingPaymentTransactionReadQueryResponse, never, never>
type ApiV1BillingPaymentTransactionRead = {
  data: ApiV1BillingPaymentTransactionReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1BillingPaymentTransactionReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentTransactionReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentTransactionReadClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentTransactionReadClient>>
  }
}
export const apiV1BillingPaymentTransactionReadQueryKey = (id: ApiV1BillingPaymentTransactionReadPathParams["id"]) => [{ url: "/api/v1/billing/payment/transaction/:id/", params: { id: id } }] as const
export type ApiV1BillingPaymentTransactionReadQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionReadQueryKey>
export function apiV1BillingPaymentTransactionReadQueryOptions<TData = ApiV1BillingPaymentTransactionRead["response"], TQueryData = ApiV1BillingPaymentTransactionRead["response"]>(
  id: ApiV1BillingPaymentTransactionReadPathParams["id"],
  options: ApiV1BillingPaymentTransactionRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingPaymentTransactionRead["response"], ApiV1BillingPaymentTransactionRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingPaymentTransactionRead["data"], ApiV1BillingPaymentTransactionRead["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/payment/transaction/:id/ */
export function useApiV1BillingPaymentTransactionRead<
  TData = ApiV1BillingPaymentTransactionRead["response"],
  TQueryData = ApiV1BillingPaymentTransactionRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionReadQueryKey,
>(
  id: ApiV1BillingPaymentTransactionReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingPaymentTransactionRead["response"], ApiV1BillingPaymentTransactionRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingPaymentTransactionRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionReadQueryKey(id)
  const query = useQuery<ApiV1BillingPaymentTransactionRead["data"], ApiV1BillingPaymentTransactionRead["error"], TData, any>({
    ...apiV1BillingPaymentTransactionReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingPaymentTransactionRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingPaymentTransactionReadInfiniteQueryKey = (id: ApiV1BillingPaymentTransactionReadPathParams["id"]) =>
  [{ url: "/api/v1/billing/payment/transaction/:id/", params: { id: id } }] as const
export type ApiV1BillingPaymentTransactionReadInfiniteQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionReadInfiniteQueryKey>
export function apiV1BillingPaymentTransactionReadInfiniteQueryOptions<TData = ApiV1BillingPaymentTransactionRead["response"], TQueryData = ApiV1BillingPaymentTransactionRead["response"]>(
  id: ApiV1BillingPaymentTransactionReadPathParams["id"],
  options: ApiV1BillingPaymentTransactionRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionRead["response"], ApiV1BillingPaymentTransactionRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingPaymentTransactionRead["data"], ApiV1BillingPaymentTransactionRead["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/payment/transaction/:id/ */
export function useApiV1BillingPaymentTransactionReadInfinite<
  TData = InfiniteData<ApiV1BillingPaymentTransactionRead["response"]>,
  TQueryData = ApiV1BillingPaymentTransactionRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionReadInfiniteQueryKey,
>(
  id: ApiV1BillingPaymentTransactionReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionRead["response"], ApiV1BillingPaymentTransactionRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1BillingPaymentTransactionRead["data"], ApiV1BillingPaymentTransactionRead["error"], TData, any>({
    ...apiV1BillingPaymentTransactionReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
