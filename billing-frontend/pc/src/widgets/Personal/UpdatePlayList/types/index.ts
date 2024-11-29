import { ParsedUrlQuery } from "querystring"

export interface PageQueries extends ParsedUrlQuery {
  selected_device_id: string | undefined
  selected_os: string | undefined
  selected_format: string | undefined
}

export interface FormatItemProps {
  lang: string,
  items: string[]
}