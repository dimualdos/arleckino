import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1AppReadQueryResponse, ApiExternalV1AppReadPathParams } from "../../../models/ts/apiExternalController/ApiExternalV1AppRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1AppReadClient = typeof client<ApiExternalV1AppReadQueryResponse, never, never>
type ApiExternalV1AppRead = {
  data: ApiExternalV1AppReadQueryResponse
  error: never
  request: never
  pathParams: ApiExternalV1AppReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1AppReadClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1AppReadClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1AppReadClient>>
  }
}
export const apiExternalV1AppReadQueryKey = (hwid: ApiExternalV1AppReadPathParams["hwid"]) => [{ url: "/api_external/v1/app/:hwid/", params: { hwid: hwid } }] as const
export type ApiExternalV1AppReadQueryKey = ReturnType<typeof apiExternalV1AppReadQueryKey>
export function apiExternalV1AppReadQueryOptions<TData = ApiExternalV1AppRead["response"], TQueryData = ApiExternalV1AppRead["response"]>(
  hwid: ApiExternalV1AppReadPathParams["hwid"],
  options: ApiExternalV1AppRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1AppRead["response"], ApiExternalV1AppRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1AppReadQueryKey(hwid)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1AppRead["data"], ApiExternalV1AppRead["error"]>({
        method: "get",
        url: `/api_external/v1/app/${hwid}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Получение информации для приложения с указанным HWID.
 * @link /api_external/v1/app/:hwid/ */
export function useApiExternalV1AppRead<TData = ApiExternalV1AppRead["response"], TQueryData = ApiExternalV1AppRead["response"], TQueryKey extends QueryKey = ApiExternalV1AppReadQueryKey>(
  hwid: ApiExternalV1AppReadPathParams["hwid"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1AppRead["response"], ApiExternalV1AppRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1AppRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1AppRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1AppReadQueryKey(hwid)
  const query = useQuery<ApiExternalV1AppRead["data"], ApiExternalV1AppRead["error"], TData, any>({
    ...apiExternalV1AppReadQueryOptions<TData, TQueryData>(hwid, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1AppRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1AppReadInfiniteQueryKey = (hwid: ApiExternalV1AppReadPathParams["hwid"]) => [{ url: "/api_external/v1/app/:hwid/", params: { hwid: hwid } }] as const
export type ApiExternalV1AppReadInfiniteQueryKey = ReturnType<typeof apiExternalV1AppReadInfiniteQueryKey>
export function apiExternalV1AppReadInfiniteQueryOptions<TData = ApiExternalV1AppRead["response"], TQueryData = ApiExternalV1AppRead["response"]>(
  hwid: ApiExternalV1AppReadPathParams["hwid"],
  options: ApiExternalV1AppRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1AppRead["response"], ApiExternalV1AppRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1AppReadInfiniteQueryKey(hwid)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1AppRead["data"], ApiExternalV1AppRead["error"]>({
        method: "get",
        url: `/api_external/v1/app/${hwid}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Получение информации для приложения с указанным HWID.
 * @link /api_external/v1/app/:hwid/ */
export function useApiExternalV1AppReadInfinite<
  TData = InfiniteData<ApiExternalV1AppRead["response"]>,
  TQueryData = ApiExternalV1AppRead["response"],
  TQueryKey extends QueryKey = ApiExternalV1AppReadInfiniteQueryKey,
>(
  hwid: ApiExternalV1AppReadPathParams["hwid"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1AppRead["response"], ApiExternalV1AppRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1AppRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1AppRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1AppReadInfiniteQueryKey(hwid)
  const query = useInfiniteQuery<ApiExternalV1AppRead["data"], ApiExternalV1AppRead["error"], TData, any>({
    ...apiExternalV1AppReadInfiniteQueryOptions<TData, TQueryData>(hwid, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1AppRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
