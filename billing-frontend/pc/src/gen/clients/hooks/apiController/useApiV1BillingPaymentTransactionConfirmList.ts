import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1BillingPaymentTransactionConfirmListQueryResponse,
  ApiV1BillingPaymentTransactionConfirmListPathParams,
  ApiV1BillingPaymentTransactionConfirmListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionConfirmList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1BillingPaymentTransactionConfirmListClient = typeof client<ApiV1BillingPaymentTransactionConfirmListQueryResponse, never, never>
type ApiV1BillingPaymentTransactionConfirmList = {
  data: ApiV1BillingPaymentTransactionConfirmListQueryResponse
  error: never
  request: never
  pathParams: ApiV1BillingPaymentTransactionConfirmListPathParams
  queryParams: ApiV1BillingPaymentTransactionConfirmListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1BillingPaymentTransactionConfirmListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1BillingPaymentTransactionConfirmListClient>[0]>
    return: Awaited<ReturnType<ApiV1BillingPaymentTransactionConfirmListClient>>
  }
}
export const apiV1BillingPaymentTransactionConfirmListQueryKey = (
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
) => [{ url: "/api/v1/billing/payment/transaction/:payment_system_id/confirm/", params: { paymentSystemId: paymentSystemId } }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentTransactionConfirmListQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionConfirmListQueryKey>
export function apiV1BillingPaymentTransactionConfirmListQueryOptions<
  TData = ApiV1BillingPaymentTransactionConfirmList["response"],
  TQueryData = ApiV1BillingPaymentTransactionConfirmList["response"],
>(
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
  options: ApiV1BillingPaymentTransactionConfirmList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1BillingPaymentTransactionConfirmList["response"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionConfirmListQueryKey(paymentSystemId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1BillingPaymentTransactionConfirmList["data"], ApiV1BillingPaymentTransactionConfirmList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/${paymentSystemId}/confirm/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **payment_system_not_found_by_id**Платежная система с указанным ID {} не обнаружена.* **payment_system_settings_class_not_found**Класс параметров для платежной системы с указанным ID {} не обнаружен.* **payment_system_invalid_settings_format**Неверный формат поля settings у платежной системы с указанным ID {}.* **payment_transaction_not_found_by_id**Платежная транзакция с указанным ID {} не обнаружена.* **payment_transaction_created_for_another_payment_system**Платежная транзакция с указанным ID {} создана для другой платежной системы.* **payment_transaction_confirmation_invalid_signature**Неверная подпись в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_merchant_id**Неверный ID магазина в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_amount**Неверная сумма платежа в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_email**Неверный email пользователя в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_created_by_another_user**Платежная транзакция с указанным ID {} создана другим пользователем.* **payment_transaction_already_confirmed**Платежная транзакция с указанным ID {} уже подтверждена.
 * @summary Подтверждение успешной оплаты платежной транзакции в платежной системе
 * @link /api/v1/billing/payment/transaction/:payment_system_id/confirm/ */
export function useApiV1BillingPaymentTransactionConfirmList<
  TData = ApiV1BillingPaymentTransactionConfirmList["response"],
  TQueryData = ApiV1BillingPaymentTransactionConfirmList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionConfirmListQueryKey,
>(
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1BillingPaymentTransactionConfirmList["response"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionConfirmList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1BillingPaymentTransactionConfirmList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionConfirmListQueryKey(paymentSystemId, params)
  const query = useQuery<ApiV1BillingPaymentTransactionConfirmList["data"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, any>({
    ...apiV1BillingPaymentTransactionConfirmListQueryOptions<TData, TQueryData>(paymentSystemId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1BillingPaymentTransactionConfirmList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1BillingPaymentTransactionConfirmListInfiniteQueryKey = (
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
) => [{ url: "/api/v1/billing/payment/transaction/:payment_system_id/confirm/", params: { paymentSystemId: paymentSystemId } }, ...(params ? [params] : [])] as const
export type ApiV1BillingPaymentTransactionConfirmListInfiniteQueryKey = ReturnType<typeof apiV1BillingPaymentTransactionConfirmListInfiniteQueryKey>
export function apiV1BillingPaymentTransactionConfirmListInfiniteQueryOptions<
  TData = ApiV1BillingPaymentTransactionConfirmList["response"],
  TQueryData = ApiV1BillingPaymentTransactionConfirmList["response"],
>(
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
  options: ApiV1BillingPaymentTransactionConfirmList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionConfirmList["response"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1BillingPaymentTransactionConfirmListInfiniteQueryKey(paymentSystemId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1BillingPaymentTransactionConfirmList["data"], ApiV1BillingPaymentTransactionConfirmList["error"]>({
        method: "get",
        url: `/api/v1/billing/payment/transaction/${paymentSystemId}/confirm/`,
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
 * @description Список сообщений **message_type**:* **payment_system_not_found_by_id**Платежная система с указанным ID {} не обнаружена.* **payment_system_settings_class_not_found**Класс параметров для платежной системы с указанным ID {} не обнаружен.* **payment_system_invalid_settings_format**Неверный формат поля settings у платежной системы с указанным ID {}.* **payment_transaction_not_found_by_id**Платежная транзакция с указанным ID {} не обнаружена.* **payment_transaction_created_for_another_payment_system**Платежная транзакция с указанным ID {} создана для другой платежной системы.* **payment_transaction_confirmation_invalid_signature**Неверная подпись в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_merchant_id**Неверный ID магазина в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_amount**Неверная сумма платежа в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_email**Неверный email пользователя в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_created_by_another_user**Платежная транзакция с указанным ID {} создана другим пользователем.* **payment_transaction_already_confirmed**Платежная транзакция с указанным ID {} уже подтверждена.
 * @summary Подтверждение успешной оплаты платежной транзакции в платежной системе
 * @link /api/v1/billing/payment/transaction/:payment_system_id/confirm/ */
export function useApiV1BillingPaymentTransactionConfirmListInfinite<
  TData = InfiniteData<ApiV1BillingPaymentTransactionConfirmList["response"]>,
  TQueryData = ApiV1BillingPaymentTransactionConfirmList["response"],
  TQueryKey extends QueryKey = ApiV1BillingPaymentTransactionConfirmListInfiniteQueryKey,
>(
  paymentSystemId: ApiV1BillingPaymentTransactionConfirmListPathParams["payment_system_id"],
  params?: ApiV1BillingPaymentTransactionConfirmList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1BillingPaymentTransactionConfirmList["response"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1BillingPaymentTransactionConfirmList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionConfirmList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1BillingPaymentTransactionConfirmListInfiniteQueryKey(paymentSystemId, params)
  const query = useInfiniteQuery<ApiV1BillingPaymentTransactionConfirmList["data"], ApiV1BillingPaymentTransactionConfirmList["error"], TData, any>({
    ...apiV1BillingPaymentTransactionConfirmListInfiniteQueryOptions<TData, TQueryData>(paymentSystemId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1BillingPaymentTransactionConfirmList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
