import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserBlockReadQueryResponse, ApiV1UserAdminUserBlockReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserBlockRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserBlockReadClient = typeof client<ApiV1UserAdminUserBlockReadQueryResponse, never, never>
type ApiV1UserAdminUserBlockRead = {
  data: ApiV1UserAdminUserBlockReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserBlockReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserBlockReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserBlockReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserBlockReadClient>>
  }
}
export const apiV1UserAdminUserBlockReadQueryKey = (blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"], id: ApiV1UserAdminUserBlockReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/block/:block_pk", params: { id: id, blockPk: blockPk } }] as const
export type ApiV1UserAdminUserBlockReadQueryKey = ReturnType<typeof apiV1UserAdminUserBlockReadQueryKey>
export function apiV1UserAdminUserBlockReadQueryOptions<TData = ApiV1UserAdminUserBlockRead["response"], TQueryData = ApiV1UserAdminUserBlockRead["response"]>(
  blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"],
  id: ApiV1UserAdminUserBlockReadPathParams["id"],
  options: ApiV1UserAdminUserBlockRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserBlockRead["response"], ApiV1UserAdminUserBlockRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockReadQueryKey(blockPk, id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserBlockRead["data"], ApiV1UserAdminUserBlockRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block/${blockPk}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_expires_equal_to_current**Указанная дата окончания актуальной блокировки пользователя {} совпадает с текущей {}.* **user_actual_block_expires_is_less_today**Указанная дата окончания актуальной блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.* **user_block_already_cancelled**Блокировка пользователя с указанным ID {} уже отменена, изменение невозможно.* **user_block_is_not_actual**Указанный ID блокировки пользователя {} не совпадает с ID актуальной блокировки {}.
 * @summary АПИ представление блокировки с указанием причины
 * @link /api/v1/user/admin/user/:id/block/:block_pk */
export function useApiV1UserAdminUserBlockRead<
  TData = ApiV1UserAdminUserBlockRead["response"],
  TQueryData = ApiV1UserAdminUserBlockRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockReadQueryKey,
>(
  blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"],
  id: ApiV1UserAdminUserBlockReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserBlockRead["response"], ApiV1UserAdminUserBlockRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserBlockRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockReadQueryKey(blockPk, id)
  const query = useQuery<ApiV1UserAdminUserBlockRead["data"], ApiV1UserAdminUserBlockRead["error"], TData, any>({
    ...apiV1UserAdminUserBlockReadQueryOptions<TData, TQueryData>(blockPk, id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserBlockRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserBlockReadInfiniteQueryKey = (blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"], id: ApiV1UserAdminUserBlockReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/block/:block_pk", params: { id: id, blockPk: blockPk } }] as const
export type ApiV1UserAdminUserBlockReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserBlockReadInfiniteQueryKey>
export function apiV1UserAdminUserBlockReadInfiniteQueryOptions<TData = ApiV1UserAdminUserBlockRead["response"], TQueryData = ApiV1UserAdminUserBlockRead["response"]>(
  blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"],
  id: ApiV1UserAdminUserBlockReadPathParams["id"],
  options: ApiV1UserAdminUserBlockRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockRead["response"], ApiV1UserAdminUserBlockRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserBlockReadInfiniteQueryKey(blockPk, id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserBlockRead["data"], ApiV1UserAdminUserBlockRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/block/${blockPk}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **user_actual_block_expires_equal_to_current**Указанная дата окончания актуальной блокировки пользователя {} совпадает с текущей {}.* **user_actual_block_expires_is_less_today**Указанная дата окончания актуальной блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.* **user_block_already_cancelled**Блокировка пользователя с указанным ID {} уже отменена, изменение невозможно.* **user_block_is_not_actual**Указанный ID блокировки пользователя {} не совпадает с ID актуальной блокировки {}.
 * @summary АПИ представление блокировки с указанием причины
 * @link /api/v1/user/admin/user/:id/block/:block_pk */
export function useApiV1UserAdminUserBlockReadInfinite<
  TData = InfiniteData<ApiV1UserAdminUserBlockRead["response"]>,
  TQueryData = ApiV1UserAdminUserBlockRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserBlockReadInfiniteQueryKey,
>(
  blockPk: ApiV1UserAdminUserBlockReadPathParams["block_pk"],
  id: ApiV1UserAdminUserBlockReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserBlockRead["response"], ApiV1UserAdminUserBlockRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserBlockRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserBlockReadInfiniteQueryKey(blockPk, id)
  const query = useInfiniteQuery<ApiV1UserAdminUserBlockRead["data"], ApiV1UserAdminUserBlockRead["error"], TData, any>({
    ...apiV1UserAdminUserBlockReadInfiniteQueryOptions<TData, TQueryData>(blockPk, id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserBlockRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
