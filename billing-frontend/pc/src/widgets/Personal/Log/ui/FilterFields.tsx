import React from "react"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/src/shared/ui/popover"
import { Button } from "@/src/shared/ui/button"
import { cn } from "@/src/shared/utils/cn"
import { Search, Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/src/shared/ui/calendar"
import { DateRange } from "react-day-picker"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { useTranslations } from "next-intl"
import { useDevices } from "@/src/shared/hooks/useDevices"
import { Device } from "@/src/gen/models/ts/Device"

type Props = {
  toggleDatePicker: () => void
  date: DateRange | undefined
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
  setSearch: React.Dispatch<React.SetStateAction<string | null>>
  setDevice: React.Dispatch<React.SetStateAction<Device | undefined>>
  selectedDevices: Device[]
}

export const FilterFields = ({ date, setDate, toggleDatePicker, setSearch, setDevice, selectedDevices }: Props) => {
  const t = useTranslations("workLog")

  return (
    <>
      {/* DATE RANGE + TYPE */}
      <div className="flex items-center space-x-4 lg:flex-col-reverse lg:space-x-0 lg:space-y-4">
        {/* DATE RANGE DESKTOP START */}
        <div className="space-y-0.5 lg:hidden">
          <Label className="block"> {t("period")}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"white"}
                className={cn("justify-start text-left font-normal")}
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "dd.MM.yyyy")} - {format(date.to, "dd.MM.yyyy")}
                    </>
                  ) : (
                    format(date.from, "dd.MM.yyyy")
                  )
                ) : (
                  <span> {t("selectDate")}</span>
                )}
                <CalendarIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full p-0"
              align="start"
            >
              <Calendar
                locale={ru}
                lang="ru"
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* DATE RANGE DESKTOP END */}

        {/* PEDION MOBILE START */}
        <div className="hidden w-full flex-col space-y-0.5 lg:flex">
          <Label>{t("period")}</Label>
          <Button
            onClick={toggleDatePicker}
            id="date"
            variant={"white"}
            className={cn("w-full justify-start text-left font-normal")}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd.MM.yyyy")} - {format(date.to, "dd.MM.yyyy")}
                </>
              ) : (
                format(date.from, "dd.MM.yyyy")
              )
            ) : (
              <span>{t("selectDate")}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4" />
          </Button>
        </div>
        {/* PEDION MOBILE END */}

        {/* TYPE */}
        <div className="space-y-0.5 lg:w-full">
          <Label>{t("type")}</Label>
          <Select onValueChange={(value) => setDevice(value ? selectedDevices?.find((item) => item.name === value) : undefined)}>
            <SelectTrigger className="w-80 text-base lg:w-full">
              <SelectValue placeholder="Устройства" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selectedDevices?.map((item) => (
                  <SelectItem
                    className="px-4"
                    key={item.name}
                    value={item.name!}
                  >
                    <span className="text-base">{item.name}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mt-auto space-y-0.5">
        <div className="relative w-80 lg:w-full">
          <Input
            onChange={(event) => {
              console.log(event.target.value)
              setSearch(event.target.value)
            }}
            placeholder={t("search")}
          />
          <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
        </div>
      </div>
    </>
  )
}
