import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1BillingAdminPaymentSystemReadQueryResponse, ApiV1BillingAdminPaymentSystemReadPathParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingAdminPaymentSystemReadClient = typeof client<ApiV1BillingAdminPaymentSystemReadQueryResponse, never, never>
type ApiV1BillingAdminPaymentSystemRead = {
  data: ApiV1BillingAdminPaymentSystemReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1BillingAdminPaymentSystemReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingAdminPaymentSystemReadClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingAdminPaymentSystemReadClient>>
  }
}
export const apiV1BillingAdminPaymentSystemReadQueryKey = (id: ApiV1BillingAdminPaymentSystemReadPathParams["id"]) =>
  [{ url: "/api/v1/billing/admin/payment/system/:id/", params: { id: id } }] as const
export type ApiV1BillingAdminPaymentSystemReadQueryKey = ReturnType<typeof apiV1BillingAdminPaymentSystemReadQueryKey>
export function apiV1BillingAdminPaymentSystemReadQueryOptions<TData = ApiV1BillingAdminPaymentSystemRead["response"], TQueryData = ApiV1BillingAdminPaymentSystemRead["response"]>(
  id: ApiV1BillingAdminPaymentSystemReadPathParams["id"],
  options: ApiV1BillingAdminPaymentSystemRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingAdminPaymentSystemRead["response"], ApiV1BillingAdminPaymentSystemRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentSystemReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingAdminPaymentSystemRead["data"], ApiV1BillingAdminPaymentSystemRead["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/system/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export function useApiV1BillingAdminPaymentSystemRead<
  TData = ApiV1BillingAdminPaymentSystemRead["response"],
  TQueryData = ApiV1BillingAdminPaymentSystemRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentSystemReadQueryKey,
>(
  id: ApiV1BillingAdminPaymentSystemReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingAdminPaymentSystemRead["response"], ApiV1BillingAdminPaymentSystemRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentSystemRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingAdminPaymentSystemRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentSystemReadQueryKey(id)
  const query = useQuery<ApiV1BillingAdminPaymentSystemRead["data"], ApiV1BillingAdminPaymentSystemRead["error"], TData, any>({
    ...apiV1BillingAdminPaymentSystemReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingAdminPaymentSystemRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingAdminPaymentSystemReadInfiniteQueryKey = (id: ApiV1BillingAdminPaymentSystemReadPathParams["id"]) =>
  [{ url: "/api/v1/billing/admin/payment/system/:id/", params: { id: id } }] as const
export type ApiV1BillingAdminPaymentSystemReadInfiniteQueryKey = ReturnType<typeof apiV1BillingAdminPaymentSystemReadInfiniteQueryKey>
export function apiV1BillingAdminPaymentSystemReadInfiniteQueryOptions<TData = ApiV1BillingAdminPaymentSystemRead["response"], TQueryData = ApiV1BillingAdminPaymentSystemRead["response"]>(
  id: ApiV1BillingAdminPaymentSystemReadPathParams["id"],
  options: ApiV1BillingAdminPaymentSystemRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentSystemRead["response"], ApiV1BillingAdminPaymentSystemRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingAdminPaymentSystemReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingAdminPaymentSystemRead["data"], ApiV1BillingAdminPaymentSystemRead["error"]>({
        method: "get",
        url: `/api/v1/billing/admin/payment/system/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export function useApiV1BillingAdminPaymentSystemReadInfinite<
  TData = InfiniteData<ApiV1BillingAdminPaymentSystemRead["response"]>,
  TQueryData = ApiV1BillingAdminPaymentSystemRead["response"],
  TQueryKey extends QueryKey = ApiV1BillingAdminPaymentSystemReadInfiniteQueryKey,
>(
  id: ApiV1BillingAdminPaymentSystemReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingAdminPaymentSystemRead["response"], ApiV1BillingAdminPaymentSystemRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingAdminPaymentSystemRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentSystemRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingAdminPaymentSystemReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1BillingAdminPaymentSystemRead["data"], ApiV1BillingAdminPaymentSystemRead["error"], TData, any>({
    ...apiV1BillingAdminPaymentSystemReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingAdminPaymentSystemRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
