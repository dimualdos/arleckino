import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminLogsUserReadQueryResponse,
  ApiV1ActionsAdminLogsUserReadPathParams,
  ApiV1ActionsAdminLogsUserReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsUserRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminLogsUserReadClient = typeof client<ApiV1ActionsAdminLogsUserReadQueryResponse, never, never>
type ApiV1ActionsAdminLogsUserRead = {
  data: ApiV1ActionsAdminLogsUserReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminLogsUserReadPathParams
  queryParams: ApiV1ActionsAdminLogsUserReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminLogsUserReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminLogsUserReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminLogsUserReadClient>>
  }
}
export const apiV1ActionsAdminLogsUserReadQueryKey = (userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"], params?: ApiV1ActionsAdminLogsUserRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/user/:userId", params: { userId: userId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsUserReadQueryKey = ReturnType<typeof apiV1ActionsAdminLogsUserReadQueryKey>
export function apiV1ActionsAdminLogsUserReadQueryOptions<TData = ApiV1ActionsAdminLogsUserRead["response"], TQueryData = ApiV1ActionsAdminLogsUserRead["response"]>(
  userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"],
  params?: ApiV1ActionsAdminLogsUserRead["queryParams"],
  options: ApiV1ActionsAdminLogsUserRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminLogsUserRead["response"], ApiV1ActionsAdminLogsUserRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsUserReadQueryKey(userId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminLogsUserRead["data"], ApiV1ActionsAdminLogsUserRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/user/${userId}`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки логов конкретного пользователя
 * @link /api/v1/actions/admin/logs/user/:userId */
export function useApiV1ActionsAdminLogsUserRead<
  TData = ApiV1ActionsAdminLogsUserRead["response"],
  TQueryData = ApiV1ActionsAdminLogsUserRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsUserReadQueryKey,
>(
  userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"],
  params?: ApiV1ActionsAdminLogsUserRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminLogsUserRead["response"], ApiV1ActionsAdminLogsUserRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsUserRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminLogsUserRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsUserReadQueryKey(userId, params)
  const query = useQuery<ApiV1ActionsAdminLogsUserRead["data"], ApiV1ActionsAdminLogsUserRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsUserReadQueryOptions<TData, TQueryData>(userId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminLogsUserRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminLogsUserReadInfiniteQueryKey = (userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"], params?: ApiV1ActionsAdminLogsUserRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/user/:userId", params: { userId: userId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsUserReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminLogsUserReadInfiniteQueryKey>
export function apiV1ActionsAdminLogsUserReadInfiniteQueryOptions<TData = ApiV1ActionsAdminLogsUserRead["response"], TQueryData = ApiV1ActionsAdminLogsUserRead["response"]>(
  userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"],
  params?: ApiV1ActionsAdminLogsUserRead["queryParams"],
  options: ApiV1ActionsAdminLogsUserRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsUserRead["response"], ApiV1ActionsAdminLogsUserRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsUserReadInfiniteQueryKey(userId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminLogsUserRead["data"], ApiV1ActionsAdminLogsUserRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/user/${userId}`,
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
 * @description Представление для выборки логов конкретного пользователя
 * @link /api/v1/actions/admin/logs/user/:userId */
export function useApiV1ActionsAdminLogsUserReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminLogsUserRead["response"]>,
  TQueryData = ApiV1ActionsAdminLogsUserRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsUserReadInfiniteQueryKey,
>(
  userId: ApiV1ActionsAdminLogsUserReadPathParams["userId"],
  params?: ApiV1ActionsAdminLogsUserRead["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsUserRead["response"], ApiV1ActionsAdminLogsUserRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsUserRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsUserRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsUserReadInfiniteQueryKey(userId, params)
  const query = useInfiniteQuery<ApiV1ActionsAdminLogsUserRead["data"], ApiV1ActionsAdminLogsUserRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsUserReadInfiniteQueryOptions<TData, TQueryData>(userId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsUserRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
