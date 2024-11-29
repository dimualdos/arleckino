import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminPromocodeReadQueryResponse, ApiV1ServiceAdminPromocodeReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeReadClient = typeof client<ApiV1ServiceAdminPromocodeReadQueryResponse, never, never>
type ApiV1ServiceAdminPromocodeRead = {
  data: ApiV1ServiceAdminPromocodeReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceAdminPromocodeReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeReadClient>>
  }
}
export const apiV1ServiceAdminPromocodeReadQueryKey = (id: ApiV1ServiceAdminPromocodeReadPathParams["id"]) => [{ url: "/api/v1/service/admin/promocode/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminPromocodeReadQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeReadQueryKey>
export function apiV1ServiceAdminPromocodeReadQueryOptions<TData = ApiV1ServiceAdminPromocodeRead["response"], TQueryData = ApiV1ServiceAdminPromocodeRead["response"]>(
  id: ApiV1ServiceAdminPromocodeReadPathParams["id"],
  options: ApiV1ServiceAdminPromocodeRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeRead["response"], ApiV1ServiceAdminPromocodeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminPromocodeRead["data"], ApiV1ServiceAdminPromocodeRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных промокода.
 * @link /api/v1/service/admin/promocode/:id/ */
export function useApiV1ServiceAdminPromocodeRead<
  TData = ApiV1ServiceAdminPromocodeRead["response"],
  TQueryData = ApiV1ServiceAdminPromocodeRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeReadQueryKey,
>(
  id: ApiV1ServiceAdminPromocodeReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminPromocodeRead["response"], ApiV1ServiceAdminPromocodeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminPromocodeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeReadQueryKey(id)
  const query = useQuery<ApiV1ServiceAdminPromocodeRead["data"], ApiV1ServiceAdminPromocodeRead["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminPromocodeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminPromocodeReadInfiniteQueryKey = (id: ApiV1ServiceAdminPromocodeReadPathParams["id"]) => [{ url: "/api/v1/service/admin/promocode/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminPromocodeReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminPromocodeReadInfiniteQueryKey>
export function apiV1ServiceAdminPromocodeReadInfiniteQueryOptions<TData = ApiV1ServiceAdminPromocodeRead["response"], TQueryData = ApiV1ServiceAdminPromocodeRead["response"]>(
  id: ApiV1ServiceAdminPromocodeReadPathParams["id"],
  options: ApiV1ServiceAdminPromocodeRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeRead["response"], ApiV1ServiceAdminPromocodeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminPromocodeReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminPromocodeRead["data"], ApiV1ServiceAdminPromocodeRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/promocode/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр данных промокода.
 * @link /api/v1/service/admin/promocode/:id/ */
export function useApiV1ServiceAdminPromocodeReadInfinite<
  TData = InfiniteData<ApiV1ServiceAdminPromocodeRead["response"]>,
  TQueryData = ApiV1ServiceAdminPromocodeRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminPromocodeReadInfiniteQueryKey,
>(
  id: ApiV1ServiceAdminPromocodeReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminPromocodeRead["response"], ApiV1ServiceAdminPromocodeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminPromocodeRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminPromocodeReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ServiceAdminPromocodeRead["data"], ApiV1ServiceAdminPromocodeRead["error"], TData, any>({
    ...apiV1ServiceAdminPromocodeReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminPromocodeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
