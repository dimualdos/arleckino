import { ParsedUrlQuery } from "querystring"

export interface SharedQueryPageFaq extends ParsedUrlQuery {
  selected_tag?: string
  selected_question_id?: string
}

export interface SharedQueryPageNews extends ParsedUrlQuery {
  page?: string
  pageSize?: string
}
export interface SharedQueryLogs extends ParsedUrlQuery {
  page?: string
  limit?: string
}

export interface SharedQueryAddDevice extends ParsedUrlQuery {
  stepNumber?: string
}

export interface BaseAxiosError {
  errors: unknown
  message: string
  message_params: unknown
  message_type: string
}

export type AddDeviceStepProps = {
  name: string
  number: number
  isCompleted?: boolean
}

