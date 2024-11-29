import type { HelpDeskCaseCreate } from "../HelpDeskCaseCreate"

export type ApiV1HelpdeskCasesCreate201 = HelpDeskCaseCreate

export type ApiV1HelpdeskCasesCreateMutationRequest = HelpDeskCaseCreate

export type ApiV1HelpdeskCasesCreateMutationResponse = { task_id: string; status: "success" | "processed"; case: HelpDeskCaseCreate }
export namespace ApiV1HelpdeskCasesCreateMutation {
  export type Response = ApiV1HelpdeskCasesCreateMutationResponse
  export type Request = ApiV1HelpdeskCasesCreateMutationRequest
  export type Errors = ApiV1HelpdeskCasesCreate201
}
