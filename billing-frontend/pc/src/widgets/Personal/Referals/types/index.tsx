import { ParsedUrlQuery } from "querystring"

export interface PageQueries extends ParsedUrlQuery {
  view: "transactions" | "links" | "requests" | undefined
}
