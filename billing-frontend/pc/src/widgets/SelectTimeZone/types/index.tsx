import { ApiV1UserTimezoneListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserTimezoneList"
import { Dispatch, SetStateAction } from "react"

export interface SelectTimeZoneProps {
  availableTimeZones: ApiV1UserTimezoneListQueryResponse | undefined
  selectedTimeZone: ApiV1UserTimezoneListQueryResponse[number] | null
  selectedTimeZoneSet: Dispatch<SetStateAction<ApiV1UserTimezoneListQueryResponse[number] | null>>
}
