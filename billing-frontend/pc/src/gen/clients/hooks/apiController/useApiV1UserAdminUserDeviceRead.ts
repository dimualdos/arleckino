import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserDeviceReadQueryResponse, ApiV1UserAdminUserDeviceReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceReadClient = typeof client<ApiV1UserAdminUserDeviceReadQueryResponse, never, never>
type ApiV1UserAdminUserDeviceRead = {
  data: ApiV1UserAdminUserDeviceReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserDeviceReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceReadClient>>
  }
}
export const apiV1UserAdminUserDeviceReadQueryKey = (deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"], id: ApiV1UserAdminUserDeviceReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/device/:deviceId", params: { id: id, deviceId: deviceId } }] as const
export type ApiV1UserAdminUserDeviceReadQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceReadQueryKey>
export function apiV1UserAdminUserDeviceReadQueryOptions<TData = ApiV1UserAdminUserDeviceRead["response"], TQueryData = ApiV1UserAdminUserDeviceRead["response"]>(
  deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceReadPathParams["id"],
  options: ApiV1UserAdminUserDeviceRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserDeviceRead["response"], ApiV1UserAdminUserDeviceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceReadQueryKey(deviceId, id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserDeviceRead["data"], ApiV1UserAdminUserDeviceRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Просмотр и изменение данных устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId */
export function useApiV1UserAdminUserDeviceRead<
  TData = ApiV1UserAdminUserDeviceRead["response"],
  TQueryData = ApiV1UserAdminUserDeviceRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceReadQueryKey,
>(
  deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserDeviceRead["response"], ApiV1UserAdminUserDeviceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserDeviceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceReadQueryKey(deviceId, id)
  const query = useQuery<ApiV1UserAdminUserDeviceRead["data"], ApiV1UserAdminUserDeviceRead["error"], TData, any>({
    ...apiV1UserAdminUserDeviceReadQueryOptions<TData, TQueryData>(deviceId, id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserDeviceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserDeviceReadInfiniteQueryKey = (deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"], id: ApiV1UserAdminUserDeviceReadPathParams["id"]) =>
  [{ url: "/api/v1/user/admin/user/:id/device/:deviceId", params: { id: id, deviceId: deviceId } }] as const
export type ApiV1UserAdminUserDeviceReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserDeviceReadInfiniteQueryKey>
export function apiV1UserAdminUserDeviceReadInfiniteQueryOptions<TData = ApiV1UserAdminUserDeviceRead["response"], TQueryData = ApiV1UserAdminUserDeviceRead["response"]>(
  deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceReadPathParams["id"],
  options: ApiV1UserAdminUserDeviceRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceRead["response"], ApiV1UserAdminUserDeviceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserDeviceReadInfiniteQueryKey(deviceId, id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserDeviceRead["data"], ApiV1UserAdminUserDeviceRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Просмотр и изменение данных устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId */
export function useApiV1UserAdminUserDeviceReadInfinite<
  TData = InfiniteData<ApiV1UserAdminUserDeviceRead["response"]>,
  TQueryData = ApiV1UserAdminUserDeviceRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserDeviceReadInfiniteQueryKey,
>(
  deviceId: ApiV1UserAdminUserDeviceReadPathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserDeviceRead["response"], ApiV1UserAdminUserDeviceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserDeviceRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserDeviceReadInfiniteQueryKey(deviceId, id)
  const query = useInfiniteQuery<ApiV1UserAdminUserDeviceRead["data"], ApiV1UserAdminUserDeviceRead["error"], TData, any>({
    ...apiV1UserAdminUserDeviceReadInfiniteQueryOptions<TData, TQueryData>(deviceId, id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserDeviceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
