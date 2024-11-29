import React from "react"

import { Button } from "@/src/shared/ui/button"

import { Popover, PopoverContent, PopoverTrigger } from "@/src/shared/ui/popover"
import { Calendar as CalendarIcon, BarChart2 } from "lucide-react"
import { Label } from "@/src/shared/ui/label"
import { format } from "date-fns"
import { Calendar } from "@/src/shared/ui/calendar"
import { StatisticContent } from "./StatisticContent"
import { DateRange } from "react-day-picker"
import { cn } from "@/src/shared/utils/cn"
import { ru } from "date-fns/locale"
import { useTranslations } from "next-intl"

type Props = {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  toggleDatePicker: () => void
  date: DateRange | undefined
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}

export const PeriodAndStats = ({ date, setDate, toggleDatePicker, setActive }: Props) => {
  const t = useTranslations("referals")
  return (
    <div className="flex space-x-2 lg:block lg:space-x-0 lg:space-y-4">
      {/* PERIOD DESKTOP START */}
      <div className="flex flex-col space-y-0.5 lg:hidden">
        <Label> {t("table.period")}</Label>
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
                <span>{t("table.selectDate")}</span>
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
      {/* PERIOD DESKTOP END */}

      {/* PEDION MOBILE START */}
      <div className="hidden lg:block">
        <Button
          onClick={() => setActive(true)}
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
            <span>{t("table.selectDate")}</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4" />
        </Button>
      </div>
      {/* PEDION MOBILE END */}

      {/* Статистика мобилка */}
      <div className="mt-auto lg:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"white"}
              size={"icon"}
            >
              <BarChart2 className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            className="space-y-3 text-sm"
            align="center"
          >
            <StatisticContent date={date} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Статистика десктоп */}
      <div className="hidden lg:block">
        <StatisticContent date={date} />
      </div>
    </div>
  )
}
