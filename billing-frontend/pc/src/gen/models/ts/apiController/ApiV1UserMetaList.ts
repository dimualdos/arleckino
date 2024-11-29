export type ApiV1UserMetaListQueryResponse = UserMeta | null
export type UserMeta = { current_country: { country_code: string; country_name: string } }
export type ApiV1UserMetaListQuery = {
  Response: ApiV1UserMetaListQueryResponse
}
