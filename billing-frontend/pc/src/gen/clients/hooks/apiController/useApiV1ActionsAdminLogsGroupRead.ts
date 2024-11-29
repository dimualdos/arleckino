import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminLogsGroupReadQueryResponse,
  ApiV1ActionsAdminLogsGroupReadPathParams,
  ApiV1ActionsAdminLogsGroupReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsGroupRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminLogsGroupReadClient = typeof client<ApiV1ActionsAdminLogsGroupReadQueryResponse, never, never>
type ApiV1ActionsAdminLogsGroupRead = {
  data: ApiV1ActionsAdminLogsGroupReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminLogsGroupReadPathParams
  queryParams: ApiV1ActionsAdminLogsGroupReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminLogsGroupReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminLogsGroupReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminLogsGroupReadClient>>
  }
}
export const apiV1ActionsAdminLogsGroupReadQueryKey = (groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"], params?: ApiV1ActionsAdminLogsGroupRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/group/:groupId", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsGroupReadQueryKey = ReturnType<typeof apiV1ActionsAdminLogsGroupReadQueryKey>
export function apiV1ActionsAdminLogsGroupReadQueryOptions<TData = ApiV1ActionsAdminLogsGroupRead["response"], TQueryData = ApiV1ActionsAdminLogsGroupRead["response"]>(
  groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsAdminLogsGroupRead["queryParams"],
  options: ApiV1ActionsAdminLogsGroupRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminLogsGroupRead["response"], ApiV1ActionsAdminLogsGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsGroupReadQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminLogsGroupRead["data"], ApiV1ActionsAdminLogsGroupRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/group/${groupId}`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки логов конкретной группы
 * @link /api/v1/actions/admin/logs/group/:groupId */
export function useApiV1ActionsAdminLogsGroupRead<
  TData = ApiV1ActionsAdminLogsGroupRead["response"],
  TQueryData = ApiV1ActionsAdminLogsGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsGroupReadQueryKey,
>(
  groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsAdminLogsGroupRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminLogsGroupRead["response"], ApiV1ActionsAdminLogsGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsGroupRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminLogsGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsGroupReadQueryKey(groupId, params)
  const query = useQuery<ApiV1ActionsAdminLogsGroupRead["data"], ApiV1ActionsAdminLogsGroupRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsGroupReadQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminLogsGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminLogsGroupReadInfiniteQueryKey = (groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"], params?: ApiV1ActionsAdminLogsGroupRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/group/:groupId", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsGroupReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminLogsGroupReadInfiniteQueryKey>
export function apiV1ActionsAdminLogsGroupReadInfiniteQueryOptions<TData = ApiV1ActionsAdminLogsGroupRead["response"], TQueryData = ApiV1ActionsAdminLogsGroupRead["response"]>(
  groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsAdminLogsGroupRead["queryParams"],
  options: ApiV1ActionsAdminLogsGroupRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsGroupRead["response"], ApiV1ActionsAdminLogsGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsGroupReadInfiniteQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminLogsGroupRead["data"], ApiV1ActionsAdminLogsGroupRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/group/${groupId}`,
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
 * @description Представление для выборки логов конкретной группы
 * @link /api/v1/actions/admin/logs/group/:groupId */
export function useApiV1ActionsAdminLogsGroupReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminLogsGroupRead["response"]>,
  TQueryData = ApiV1ActionsAdminLogsGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsGroupReadInfiniteQueryKey,
>(
  groupId: ApiV1ActionsAdminLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsAdminLogsGroupRead["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsGroupRead["response"], ApiV1ActionsAdminLogsGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsGroupRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsGroupReadInfiniteQueryKey(groupId, params)
  const query = useInfiniteQuery<ApiV1ActionsAdminLogsGroupRead["data"], ApiV1ActionsAdminLogsGroupRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsGroupReadInfiniteQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
