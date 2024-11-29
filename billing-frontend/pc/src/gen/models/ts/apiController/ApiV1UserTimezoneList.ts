export type ApiV1UserTimezoneListQueryResponse = Array<TimeZone>
export type ApiV1UserTimezoneListQuery = {
  Response: ApiV1UserTimezoneListQueryResponse
}

interface TimeZone {
  timezone: string
  country: string
  total_seconds: number
  offset: string
}