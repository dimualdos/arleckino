import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingAdminPaymentTransactionReadQueryResponse, ApiV1BillingAdminPaymentTransactionReadPathParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentTransactionReadClient = typeof client<ApiV1BillingAdminPaymentTransactionReadQueryResponse, never, never>
type ApiV1BillingAdminPaymentTransactionRead = {
  data: ApiV1BillingAdminPaymentTransactionReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1BillingAdminPaymentTransactionReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentTransactionReadClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentTransactionReadClient>>
  }
}
export const apiV1BillingAdminPaymentTransactionReadQueryKey = (id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/:id/", params: { id: id } }] as const
export type ApiV1BillingAdminPaymentTransactionReadQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionReadQueryKey>
export function apiV1BillingAdminPaymentTransactionReadQueryOptions<TData = ApiV1BillingAdminPaymentTransactionRead["response"], TQueryData = ApiV1BillingAdminPaymentTransactionRead["response"]>(
  id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"],
  options: ApiV1BillingAdminPaymentTransactionRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionRead["response"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentTransactionRead["data"], ApiV1BillingAdminPaymentTransactionRead["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/admin/payment/transaction/:id/ */
export function useApiV1BillingAdminPaymentTransactionRead<
  TData = ApiV1BillingAdminPaymentTransactionRead["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionReadQueryKey,
>(
  id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingAdminPaymentTransactionRead["response"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionReadQueryKey(id)
  const query = useQuery<ApiV1BillingAdminPaymentTransactionRead["data"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingAdminPaymentTransactionRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingAdminPaymentTransactionReadInfiniteQueryKey = (id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"]) =>
  [{ url: "/api/v1/billing/admin/payment/transaction/:id/", params: { id: id } }] as const
export type ApiV1BillingAdminPaymentTransactionReadInfiniteQueryKey = ReturnType<typeof apiV1BillingAdminPaymentTransactionReadInfiniteQueryKey>
export function apiV1BillingAdminPaymentTransactionReadInfiniteQueryOptions<
  TData = ApiV1BillingAdminPaymentTransactionRead["response"],
  TQueryData = ApiV1BillingAdminPaymentTransactionRead["response"],
>(
  id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"],
  options: ApiV1BillingAdminPaymentTransactionRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionRead["response"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentTransactionReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingAdminPaymentTransactionRead["data"], ApiV1BillingAdminPaymentTransactionRead["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/transaction/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/admin/payment/transaction/:id/ */
export function useApiV1BillingAdminPaymentTransactionReadInfinite<
  TData = InfiniteData<ApiV1BillingAdminPaymentTransactionRead["response"]>,
  TQueryData = ApiV1BillingAdminPaymentTransactionRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentTransactionReadInfiniteQueryKey,
>(
  id: ApiV1BillingAdminPaymentTransactionReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentTransactionRead["response"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentTransactionRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentTransactionReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1BillingAdminPaymentTransactionRead["data"], ApiV1BillingAdminPaymentTransactionRead["error"], TData, any>({
    ...apiV1BillingAdminPaymentTransactionReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentTransactionRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
