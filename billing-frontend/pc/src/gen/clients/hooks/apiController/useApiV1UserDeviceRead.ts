import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserDeviceReadQueryResponse, ApiV1UserDeviceReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserDeviceReadClient = typeof client<ApiV1UserDeviceReadQueryResponse, never, never>
type ApiV1UserDeviceRead = {
  data: ApiV1UserDeviceReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserDeviceReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceReadClient>>
  }
}
export const apiV1UserDeviceReadQueryKey = (id: ApiV1UserDeviceReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/", params: { id: id } }] as const
export type ApiV1UserDeviceReadQueryKey = ReturnType<typeof apiV1UserDeviceReadQueryKey>
export function apiV1UserDeviceReadQueryOptions<TData = ApiV1UserDeviceRead["response"], TQueryData = ApiV1UserDeviceRead["response"]>(
  id: ApiV1UserDeviceReadPathParams["id"],
  options: ApiV1UserDeviceRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserDeviceRead["response"], ApiV1UserDeviceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserDeviceRead["data"], ApiV1UserDeviceRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export function useApiV1UserDeviceRead<TData = ApiV1UserDeviceRead["response"], TQueryData = ApiV1UserDeviceRead["response"], TQueryKey extends QueryKey = ApiV1UserDeviceReadQueryKey>(
  id: ApiV1UserDeviceReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserDeviceRead["response"], ApiV1UserDeviceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserDeviceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceReadQueryKey(id)
  const query = useQuery<ApiV1UserDeviceRead["data"], ApiV1UserDeviceRead["error"], TData, any>({
    ...apiV1UserDeviceReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserDeviceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserDeviceReadInfiniteQueryKey = (id: ApiV1UserDeviceReadPathParams["id"]) => [{ url: "/api/v1/user/device/:id/", params: { id: id } }] as const
export type ApiV1UserDeviceReadInfiniteQueryKey = ReturnType<typeof apiV1UserDeviceReadInfiniteQueryKey>
export function apiV1UserDeviceReadInfiniteQueryOptions<TData = ApiV1UserDeviceRead["response"], TQueryData = ApiV1UserDeviceRead["response"]>(
  id: ApiV1UserDeviceReadPathParams["id"],
  options: ApiV1UserDeviceRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserDeviceRead["response"], ApiV1UserDeviceRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserDeviceReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserDeviceRead["data"], ApiV1UserDeviceRead["error"]>({
        method: "get",
        url: `/api/v1/user/device/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export function useApiV1UserDeviceReadInfinite<
  TData = InfiniteData<ApiV1UserDeviceRead["response"]>,
  TQueryData = ApiV1UserDeviceRead["response"],
  TQueryKey extends QueryKey = ApiV1UserDeviceReadInfiniteQueryKey,
>(
  id: ApiV1UserDeviceReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserDeviceRead["response"], ApiV1UserDeviceRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserDeviceRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserDeviceRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserDeviceReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserDeviceRead["data"], ApiV1UserDeviceRead["error"], TData, any>({
    ...apiV1UserDeviceReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserDeviceRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
