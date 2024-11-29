import { useApiV1UserTimezoneList } from "@/src/gen/clients/hooks/apiController/useApiV1UserTimezoneList"
import { ApiV1UserTimezoneListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1UserTimezoneList"
import { useState } from "react"

export const useSelectTimeZone = () => {
  const useApiV1UserTimezoneListQuery = useApiV1UserTimezoneList()
  const [selectedTimeZone, selectedTimeZoneSet] = useState<ApiV1UserTimezoneListQueryResponse[number] | null>(null)

  return { useApiV1UserTimezoneListQuery, selectedTimeZone, selectedTimeZoneSet }
}
