import type { NewsCreate } from "../NewsCreate"

export type ApiV1NewsAdminListCreate201 = NewsCreate

export type ApiV1NewsAdminListCreateMutationRequest = Omit<NonNullable<NewsCreate>, "id" | "created_date">

export type ApiV1NewsAdminListCreateMutationResponse = NewsCreate
export namespace ApiV1NewsAdminListCreateMutation {
  export type Response = ApiV1NewsAdminListCreateMutationResponse
  export type Request = ApiV1NewsAdminListCreateMutationRequest
  export type Errors = ApiV1NewsAdminListCreate201
}
