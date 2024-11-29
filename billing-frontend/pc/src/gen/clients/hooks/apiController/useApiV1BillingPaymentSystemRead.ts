import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingPaymentSystemReadQueryResponse, ApiV1BillingPaymentSystemReadPathParams } from "../../../models/ts/apiController/ApiV1BillingPaymentSystemRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingPaymentSystemReadClient = typeof client<ApiV1BillingPaymentSystemReadQueryResponse, never, never>
type ApiV1BillingPaymentSystemRead = {
  data: ApiV1BillingPaymentSystemReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1BillingPaymentSystemReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentSystemReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentSystemReadClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentSystemReadClient>>
  }
}
export const apiV1BillingPaymentSystemReadQueryKey = (id: ApiV1BillingPaymentSystemReadPathParams["id"]) => [{ url: "/api/v1/billing/payment/system/:id/", params: { id: id } }] as const
export type ApiV1BillingPaymentSystemReadQueryKey = ReturnType<typeof apiV1BillingPaymentSystemReadQueryKey>
export function apiV1BillingPaymentSystemReadQueryOptions<TData = ApiV1BillingPaymentSystemRead["response"], TQueryData = ApiV1BillingPaymentSystemRead["response"]>(
  id: ApiV1BillingPaymentSystemReadPathParams["id"],
  options: ApiV1BillingPaymentSystemRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingPaymentSystemRead["response"], ApiV1BillingPaymentSystemRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentSystemReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingPaymentSystemRead["data"], ApiV1BillingPaymentSystemRead["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/system/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной системы
 * @link /api/v1/billing/payment/system/:id/ */
export function useApiV1BillingPaymentSystemRead<
  TData = ApiV1BillingPaymentSystemRead["response"],
  TQueryData = ApiV1BillingPaymentSystemRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentSystemReadQueryKey,
>(
  id: ApiV1BillingPaymentSystemReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingPaymentSystemRead["response"], ApiV1BillingPaymentSystemRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentSystemRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingPaymentSystemRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentSystemReadQueryKey(id)
  const query = useQuery<ApiV1BillingPaymentSystemRead["data"], ApiV1BillingPaymentSystemRead["error"], TData, any>({
    ...apiV1BillingPaymentSystemReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingPaymentSystemRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingPaymentSystemReadInfiniteQueryKey = (id: ApiV1BillingPaymentSystemReadPathParams["id"]) => [{ url: "/api/v1/billing/payment/system/:id/", params: { id: id } }] as const
export type ApiV1BillingPaymentSystemReadInfiniteQueryKey = ReturnType<typeof apiV1BillingPaymentSystemReadInfiniteQueryKey>
export function apiV1BillingPaymentSystemReadInfiniteQueryOptions<TData = ApiV1BillingPaymentSystemRead["response"], TQueryData = ApiV1BillingPaymentSystemRead["response"]>(
  id: ApiV1BillingPaymentSystemReadPathParams["id"],
  options: ApiV1BillingPaymentSystemRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingPaymentSystemRead["response"], ApiV1BillingPaymentSystemRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentSystemReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingPaymentSystemRead["data"], ApiV1BillingPaymentSystemRead["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/system/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных платежной системы
 * @link /api/v1/billing/payment/system/:id/ */
export function useApiV1BillingPaymentSystemReadInfinite<
  TData = InfiniteData<ApiV1BillingPaymentSystemRead["response"]>,
  TQueryData = ApiV1BillingPaymentSystemRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentSystemReadInfiniteQueryKey,
>(
  id: ApiV1BillingPaymentSystemReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingPaymentSystemRead["response"], ApiV1BillingPaymentSystemRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentSystemRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingPaymentSystemRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentSystemReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1BillingPaymentSystemRead["data"], ApiV1BillingPaymentSystemRead["error"], TData, any>({
    ...apiV1BillingPaymentSystemReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingPaymentSystemRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
