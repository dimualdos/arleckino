import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserBlockListQueryResponse,
  ApiV1UserAdminUserBlockListPathParams,
  ApiV1UserAdminUserBlockListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockListClient = typeof client<ApiV1UserAdminUserBlockListQueryResponse, never, never>
type ApiV1UserAdminUserBlockList = {
  data: ApiV1UserAdminUserBlockListQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserBlockListPathParams
  queryParams: ApiV1UserAdminUserBlockListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockListClient>>
  }
}
export const apiV1UserAdminUserBlockListQueryKey = (id: ApiV1UserAdminUserBlockListPathParams["id"], params?: ApiV1UserAdminUserBlockList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/block", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserBlockListQueryKey = ReturnType<typeof apiV1UserAdminUserBlockListQueryKey>
export function apiV1UserAdminUserBlockListQueryOptions<TData = ApiV1UserAdminUserBlockList["response"], TQueryData = ApiV1UserAdminUserBlockList["response"]>(
  id: ApiV1UserAdminUserBlockListPathParams["id"],
  params?: ApiV1UserAdminUserBlockList["queryParams"],
  options: ApiV1UserAdminUserBlockList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserBlockList["response"], ApiV1UserAdminUserBlockList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockListQueryKey(id, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserBlockList["data"], ApiV1UserAdminUserBlockList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_already_exists**Актуальная блокировка пользователя уже существует.* **user_block_start_date_is_less_today**Указанная дата начала блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.
 * @summary Просмотр списка блокировок пользователя и создание новой.
 * @link /api/v1/user/admin/user/:id/block */
export function useApiV1UserAdminUserBlockList<
  TData = ApiV1UserAdminUserBlockList["response"],
  TQueryData = ApiV1UserAdminUserBlockList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockListQueryKey,
>(
  id: ApiV1UserAdminUserBlockListPathParams["id"],
  params?: ApiV1UserAdminUserBlockList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserBlockList["response"], ApiV1UserAdminUserBlockList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserBlockList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockListQueryKey(id, params)
  const query = useQuery<ApiV1UserAdminUserBlockList["data"], ApiV1UserAdminUserBlockList["error"], TData, any>({
    ...apiV1UserAdminUserBlockListQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserBlockList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserBlockListInfiniteQueryKey = (id: ApiV1UserAdminUserBlockListPathParams["id"], params?: ApiV1UserAdminUserBlockList["queryParams"]) =>
  [{ url: "/api/v1/user/admin/user/:id/block", params: { id: id } }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserBlockListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserBlockListInfiniteQueryKey>
export function apiV1UserAdminUserBlockListInfiniteQueryOptions<TData = ApiV1UserAdminUserBlockList["response"], TQueryData = ApiV1UserAdminUserBlockList["response"]>(
  id: ApiV1UserAdminUserBlockListPathParams["id"],
  params?: ApiV1UserAdminUserBlockList["queryParams"],
  options: ApiV1UserAdminUserBlockList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockList["response"], ApiV1UserAdminUserBlockList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockListInfiniteQueryKey(id, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserBlockList["data"], ApiV1UserAdminUserBlockList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block`,
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
 * @description Список сообщений **message_type**:* **user_actual_block_already_exists**Актуальная блокировка пользователя уже существует.* **user_block_start_date_is_less_today**Указанная дата начала блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.
 * @summary Просмотр списка блокировок пользователя и создание новой.
 * @link /api/v1/user/admin/user/:id/block */
export function useApiV1UserAdminUserBlockListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserBlockList["response"]>,
  TQueryData = ApiV1UserAdminUserBlockList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockListInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserBlockListPathParams["id"],
  params?: ApiV1UserAdminUserBlockList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockList["response"], ApiV1UserAdminUserBlockList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockListInfiniteQueryKey(id, params)
  const query = useInfiniteQuery<ApiV1UserAdminUserBlockList["data"], ApiV1UserAdminUserBlockList["error"], TData, any>({
    ...apiV1UserAdminUserBlockListInfiniteQueryOptions<TData, TQueryData>(id, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
