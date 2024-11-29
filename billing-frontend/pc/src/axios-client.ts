import axios from "axios"

import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios"
import { LOCAL_STORAGE_KEYS } from "./shared/consts"
import { operations } from "./gen/clients/axios"
import { apiV1AuthTokenRefreshCreate } from "./gen/clients/axios/apiService"

declare const AXIOS_BASE: string
declare const AXIOS_HEADERS: string

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
  url?: string
  method: "get" | "put" | "patch" | "post" | "delete"
  params?: unknown
  data?: TData
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream"
  signal?: AbortSignal
  headers?: AxiosRequestConfig["headers"]
}
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
  data: TData
  status: number
  statusText: string
  headers?: AxiosResponse["headers"]
}

export const axiosInstance = axios.create({
  baseURL: typeof AXIOS_BASE !== "undefined" ? AXIOS_BASE : process.env.NEXT_PUBLIC_API_URL,
  headers: typeof AXIOS_HEADERS !== "undefined" ? (JSON.parse(AXIOS_HEADERS) as AxiosHeaders) : undefined,
})

const matchAuthRoutes: string[] = [
  operations["api_v1_auth_account-confirm-email_create"].path,
  operations["api_v1_auth_confirm_resend_create"].path,
  operations["api_v1_auth_confirm_sign-up-complete_read"].path,
  operations["api_v1_auth_facebook_create"].path,
  operations["api_v1_auth_google_create"].path,
  operations["api_v1_auth_password_change_create"].path,
  operations["api_v1_user_profile_change-email-request-new_create"].path,
  operations["api_v1_auth_password_reset_create"].path,
  operations["api_v1_auth_sign-in_create"].path,
  operations["api_v1_auth_sign-up_create"].path,
  operations["api_v1_auth_validate_password-change-token_create"].path,
]

if (typeof window !== "undefined") {
  axiosInstance.interceptors.request.use((config) => {
    const match = matchAuthRoutes.some((url) => config.url?.startsWith(url))

    if (match) {
      return config
    }
    const LS_ACCESS_TOKEN = localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)
    if (!LS_ACCESS_TOKEN) return config

    config.headers.Authorization = `Token ${LS_ACCESS_TOKEN}`
    return config
  })

  axiosInstance.interceptors.response.use(
    (config) => {
      return config
    },
    async (error) => {
      const originalRequest = error.config
      if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
          // apiV1AuthTokenRefreshCreate().then((d) => {
          //   console.log(d)
          // })
          // console.log('401 data', data);
          // localStorage.setItem("token", data.tokens.accessToken)
          return axiosInstance.request(originalRequest)
        } catch (error) {}
      }
      throw error
    },
  )
}

export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
  const promise = axiosInstance.request<TVariables, ResponseConfig<TData>>({ ...config }).catch((e: AxiosError<TError>) => {
    throw e
  })

  return promise
}

export default axiosClient
