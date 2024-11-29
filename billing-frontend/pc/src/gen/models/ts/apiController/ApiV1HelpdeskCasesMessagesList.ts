import type { HelpDeskCaseMessage } from "../HelpDeskCaseMessage"

export type ApiV1HelpdeskCasesMessagesListPathParams = {
  /**
   * @type string
   */
  case_id: string
}

export type ApiV1HelpdeskCasesMessagesListQueryResponse = { task_id: string; status: "success" | "processed"; items?: HelpDeskCaseMessage[] }
export type ApiV1HelpdeskCasesMessagesListQuery = {
  Response: ApiV1HelpdeskCasesMessagesListQueryResponse
  PathParams: ApiV1HelpdeskCasesMessagesListPathParams
}
