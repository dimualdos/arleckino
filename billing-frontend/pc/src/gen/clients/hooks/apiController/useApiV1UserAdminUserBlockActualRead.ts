import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserBlockActualReadQueryResponse, ApiV1UserAdminUserBlockActualReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserBlockActualRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockActualReadClient = typeof client<ApiV1UserAdminUserBlockActualReadQueryResponse, never, never>
type ApiV1UserAdminUserBlockActualRead = {
  data: ApiV1UserAdminUserBlockActualReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserBlockActualReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockActualReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockActualReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockActualReadClient>>
  }
}
export const apiV1UserAdminUserBlockActualReadQueryKey = (id: ApiV1UserAdminUserBlockActualReadPathParams["id"]) => [{ url: "/api/v1/user/admin/user/:id/block/actual", params: { id: id } }] as const
export type ApiV1UserAdminUserBlockActualReadQueryKey = ReturnType<typeof apiV1UserAdminUserBlockActualReadQueryKey>
export function apiV1UserAdminUserBlockActualReadQueryOptions<TData = ApiV1UserAdminUserBlockActualRead["response"], TQueryData = ApiV1UserAdminUserBlockActualRead["response"]>(
  id: ApiV1UserAdminUserBlockActualReadPathParams["id"],
  options: ApiV1UserAdminUserBlockActualRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserBlockActualRead["response"], ApiV1UserAdminUserBlockActualRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockActualReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserBlockActualRead["data"], ApiV1UserAdminUserBlockActualRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block/actual`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description * Если результат пустой - пользователь не заблокирован* Результат с описанием блокировки - пользователь заблокирован
 * @summary Получение информации о блокировки пользователя.
 * @link /api/v1/user/admin/user/:id/block/actual */
export function useApiV1UserAdminUserBlockActualRead<
  TData = ApiV1UserAdminUserBlockActualRead["response"],
  TQueryData = ApiV1UserAdminUserBlockActualRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockActualReadQueryKey,
>(
  id: ApiV1UserAdminUserBlockActualReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserBlockActualRead["response"], ApiV1UserAdminUserBlockActualRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockActualRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserBlockActualRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockActualReadQueryKey(id)
  const query = useQuery<ApiV1UserAdminUserBlockActualRead["data"], ApiV1UserAdminUserBlockActualRead["error"], TData, any>({
    ...apiV1UserAdminUserBlockActualReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserBlockActualRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserBlockActualReadInfiniteQueryKey = (id: ApiV1UserAdminUserBlockActualReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/block/actual", params: { id: id } }] as const
export type ApiV1UserAdminUserBlockActualReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserBlockActualReadInfiniteQueryKey>
export function apiV1UserAdminUserBlockActualReadInfiniteQueryOptions<TData = ApiV1UserAdminUserBlockActualRead["response"], TQueryData = ApiV1UserAdminUserBlockActualRead["response"]>(
  id: ApiV1UserAdminUserBlockActualReadPathParams["id"],
  options: ApiV1UserAdminUserBlockActualRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockActualRead["response"], ApiV1UserAdminUserBlockActualRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockActualReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserBlockActualRead["data"], ApiV1UserAdminUserBlockActualRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block/actual`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description * Если результат пустой - пользователь не заблокирован* Результат с описанием блокировки - пользователь заблокирован
 * @summary Получение информации о блокировки пользователя.
 * @link /api/v1/user/admin/user/:id/block/actual */
export function useApiV1UserAdminUserBlockActualReadInfinite<
  TData = InfiniteData<ApiV1UserAdminUserBlockActualRead["response"]>,
  TQueryData = ApiV1UserAdminUserBlockActualRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockActualReadInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserBlockActualReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockActualRead["response"], ApiV1UserAdminUserBlockActualRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockActualRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockActualRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockActualReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminUserBlockActualRead["data"], ApiV1UserAdminUserBlockActualRead["error"], TData, any>({
    ...apiV1UserAdminUserBlockActualReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockActualRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
