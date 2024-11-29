import { HelpDeskCaseMessage } from "../HelpDeskCaseMessage"
import type { HelpDeskCaseMessageCreate } from "../HelpDeskCaseMessageCreate"

export type ApiV1HelpdeskCasesMessagesCreatePathParams = {
  /**
   * @type string
   */
  case_id: string
}

export type ApiV1HelpdeskCasesMessagesCreate201 = HelpDeskCaseMessageCreate

export type ApiV1HelpdeskCasesMessagesCreateMutationRequest = HelpDeskCaseMessageCreate

export type ApiV1HelpdeskCasesMessagesCreateMutationResponse = { task_id: string; status: "success" | "processed"; message?: HelpDeskCaseMessage }
export namespace ApiV1HelpdeskCasesMessagesCreateMutation {
  export type Response = ApiV1HelpdeskCasesMessagesCreateMutationResponse
  export type Request = ApiV1HelpdeskCasesMessagesCreateMutationRequest
  export type PathParams = ApiV1HelpdeskCasesMessagesCreatePathParams
  export type Errors = ApiV1HelpdeskCasesMessagesCreate201
}
