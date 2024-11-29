import type { HelpDeskCase } from "../HelpDeskCase"

export type ApiV1HelpdeskCasesListQueryResponse = { task_id: string; status: "success" | "processed"; items?: HelpDeskCase[] }
export type ApiV1HelpdeskCasesListQuery = {
  Response: ApiV1HelpdeskCasesListQueryResponse
}
