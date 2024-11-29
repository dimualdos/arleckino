import { ParsedUrlQuery } from "querystring"

export interface PageQueries extends ParsedUrlQuery {
  items: string | string [] | undefined
}
