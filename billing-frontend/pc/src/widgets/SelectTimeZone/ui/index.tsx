import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/shared/ui/select"
import { SelectTimeZoneProps } from "../types"
import { useApiV1UserProfilePartialUpdate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfilePartialUpdate"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import clsx from "clsx"

export const SelectTimeZone = ({ availableTimeZones, selectedTimeZone, selectedTimeZoneSet }: SelectTimeZoneProps) => {
  const useApiV1UserProfilePartialUpdateRequest = useApiV1UserProfilePartialUpdate()
  const userInfo = useApiV1UserInfoRead()

  if (!availableTimeZones) return
  const onSelect = async (val: string) => {
    const match = availableTimeZones.find((search) => search.timezone === val)
    if (match) {
      selectedTimeZoneSet(match)
      await useApiV1UserProfilePartialUpdateRequest.mutateAsync({ timezone: match.timezone })
      userInfo.refetch()
    }
  }

  if (userInfo.data?.data && availableTimeZones) {
    const userTimeZone = userInfo.data.data.timezone
    const match = availableTimeZones.find((search) => search.timezone === userTimeZone)
    if (match) selectedTimeZoneSet(match)
  }

  return (
    <div>
      <Select
        disabled={useApiV1UserProfilePartialUpdateRequest.isLoading}
        value={selectedTimeZone?.timezone}
        onValueChange={onSelect}
      >
        <SelectTrigger className="text-base">
          <SelectValue placeholder="Часовой пояс" />
        </SelectTrigger>
        <SelectContent className="max-w-full overflow-hidden">
          {availableTimeZones.map((item) => {
            const value = `(${item.offset}) ${item.timezone} ${item.country}`
            return (
              <SelectItem
                className="!relative pl-4 text-base md:text-sm sm:text-xs"
                key={item.timezone}
                value={item.timezone}
              >
                {value}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
