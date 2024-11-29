import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ActionsUserLogsGroupReadQueryResponse,
  ApiV1ActionsUserLogsGroupReadPathParams,
  ApiV1ActionsUserLogsGroupReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsUserLogsGroupRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsUserLogsGroupReadClient = typeof client<ApiV1ActionsUserLogsGroupReadQueryResponse, never, never>
type ApiV1ActionsUserLogsGroupRead = {
  data: ApiV1ActionsUserLogsGroupReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsUserLogsGroupReadPathParams
  queryParams: ApiV1ActionsUserLogsGroupReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsUserLogsGroupReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsUserLogsGroupReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsUserLogsGroupReadClient>>
  }
}
export const apiV1ActionsUserLogsGroupReadQueryKey = (groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"], params?: ApiV1ActionsUserLogsGroupRead["queryParams"]) =>
  [{ url: "/api/v1/actions/user/logs/group/:groupId", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsGroupReadQueryKey = ReturnType<typeof apiV1ActionsUserLogsGroupReadQueryKey>
export function apiV1ActionsUserLogsGroupReadQueryOptions<TData = ApiV1ActionsUserLogsGroupRead["response"], TQueryData = ApiV1ActionsUserLogsGroupRead["response"]>(
  groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsUserLogsGroupRead["queryParams"],
  options: ApiV1ActionsUserLogsGroupRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsUserLogsGroupRead["response"], ApiV1ActionsUserLogsGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsGroupReadQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsUserLogsGroupRead["data"], ApiV1ActionsUserLogsGroupRead["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/group/${groupId}`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение логов указанной группы активного пользователя
 * @link /api/v1/actions/user/logs/group/:groupId */
export function useApiV1ActionsUserLogsGroupRead<
  TData = ApiV1ActionsUserLogsGroupRead["response"],
  TQueryData = ApiV1ActionsUserLogsGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsGroupReadQueryKey,
>(
  groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsUserLogsGroupRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsUserLogsGroupRead["response"], ApiV1ActionsUserLogsGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsGroupRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsUserLogsGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsGroupReadQueryKey(groupId, params)
  const query = useQuery<ApiV1ActionsUserLogsGroupRead["data"], ApiV1ActionsUserLogsGroupRead["error"], TData, any>({
    ...apiV1ActionsUserLogsGroupReadQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsUserLogsGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsUserLogsGroupReadInfiniteQueryKey = (groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"], params?: ApiV1ActionsUserLogsGroupRead["queryParams"]) =>
  [{ url: "/api/v1/actions/user/logs/group/:groupId", params: { groupId: groupId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsUserLogsGroupReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsUserLogsGroupReadInfiniteQueryKey>
export function apiV1ActionsUserLogsGroupReadInfiniteQueryOptions<TData = ApiV1ActionsUserLogsGroupRead["response"], TQueryData = ApiV1ActionsUserLogsGroupRead["response"]>(
  groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsUserLogsGroupRead["queryParams"],
  options: ApiV1ActionsUserLogsGroupRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsUserLogsGroupRead["response"], ApiV1ActionsUserLogsGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsUserLogsGroupReadInfiniteQueryKey(groupId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsUserLogsGroupRead["data"], ApiV1ActionsUserLogsGroupRead["error"]>({
        method: "get",
        url: `/api/v1/actions/user/logs/group/${groupId}`,
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
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение логов указанной группы активного пользователя
 * @link /api/v1/actions/user/logs/group/:groupId */
export function useApiV1ActionsUserLogsGroupReadInfinite<
  TData = InfiniteData<ApiV1ActionsUserLogsGroupRead["response"]>,
  TQueryData = ApiV1ActionsUserLogsGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsUserLogsGroupReadInfiniteQueryKey,
>(
  groupId: ApiV1ActionsUserLogsGroupReadPathParams["groupId"],
  params?: ApiV1ActionsUserLogsGroupRead["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsUserLogsGroupRead["response"], ApiV1ActionsUserLogsGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsUserLogsGroupRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsUserLogsGroupReadInfiniteQueryKey(groupId, params)
  const query = useInfiniteQuery<ApiV1ActionsUserLogsGroupRead["data"], ApiV1ActionsUserLogsGroupRead["error"], TData, any>({
    ...apiV1ActionsUserLogsGroupReadInfiniteQueryOptions<TData, TQueryData>(groupId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsUserLogsGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
