import React, { useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogTitle } from "@/src/shared/ui/alert-dialog"
import clsx from "clsx"
import { DateRange } from "react-day-picker"
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
  isWithinInterval,
} from "date-fns"
import { ru } from "date-fns/locale"
import { useDebounce } from "react-use"

type Props = {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  date: DateRange | undefined
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}
interface DateObject {
  iso: string
}

interface Month {
  monthTitle: string
  days: DateObject[]
}

export const MobileDatePicker = ({ isActive, setActive, date, setDate }: Props) => {
  const [dates] = useState<Month[]>(() => {
    const startDate = new Date()
    const endDate = addMonths(startDate, 12 * 20)
    const allMonths: Month[] = []

    let currentDate = startDate
    while (currentDate <= endDate) {
      const monthStart = startOfMonth(currentDate)
      const monthEnd = endOfMonth(currentDate)
      const daysOfMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

      const month: Month = {
        monthTitle: format(currentDate, "LLLL, yyyy", {
          locale: ru,
        }),
        days: daysOfMonth.map((item) => {
          return { iso: item.toISOString() }
        }),
      }

      allMonths.push(month)
      currentDate = addMonths(currentDate, 1) // Move to next month
    }

    return allMonths
  })
  const [isDatesLoaded, isDatesLoadedSet] = useState(false)

  const [, cancel] = useDebounce(
    () => {
      if (isActive && !isDatesLoaded) isDatesLoadedSet(true)
      if (!isActive && isDatesLoaded) isDatesLoadedSet(false)
    },
    100,
    [isActive],
  )

  const onSelectDate = (value: string) => () => {
    if (!date || !date.from) {
      // If no 'from' date is set, set it with the selected date
      return setDate({ from: new Date(value), to: undefined })
    }

    if (!date.to) {
      // If 'from' date is set but 'to' date is not, set 'to' date
      if (new Date(value) < date.from) {
        // Swap 'from' and 'to' if 'to' date is before 'from' date
        return setDate({ from: new Date(value), to: date.from })
      }
      return setDate({ ...date, to: new Date(value) })
    }

    // Clear selection if 'from' and 'to' dates are already set
    setDate({ from: undefined, to: undefined })
  }

  return (
    <AlertDialog
      open={isActive}
      onOpenChange={setActive}
    >
      <AlertDialogContent className="flex h-full flex-col gap-0 space-y-0 rounded-none border-0 p-0">
        {/* HEAD START */}
        <div className="mb-auto h-auto shadow-sm">
          <AlertDialogTitle className="mb-2 p-6 text-xl">Выберите период</AlertDialogTitle>
          <div className="px-6">
            <div className="mb-4 flex items-center justify-between xxs:text-sm">
              <p
                className={clsx("relative pb-3", {
                  "text-accent": date?.from,
                })}
              >
                <span>{!date?.from ? "Выбрать дату" : format(date.from, "dd.MM.yyyy")}</span>
                <span className="absolute inset-x-0 -bottom-px h-1 w-full bg-accent" />
              </p>

              <p
                className={clsx("relative pb-3", {
                  "text-accent": date?.to,
                })}
              >
                <span>{!date?.to ? "Выбрать дату" : format(date.to, "dd.MM.yyyy")}</span>
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-grey-soft" />
              </p>
            </div>
            <div className="flex h-8 justify-between text-grey-hard xxs:text-sm">
              <span className="h-full">Пн</span>
              <span className="h-full">Вт</span>
              <span className="h-full">Ср</span>
              <span className="h-full">Чт</span>
              <span className="h-full">Пт</span>
              <span className="h-full">Сб</span>
              <span className="h-full">Вс</span>
            </div>
          </div>
        </div>
        {/* HEAD END */}

        {/* CONTENT START */}
        <div className="h-auto flex-1 overflow-hidden">
          <div className="no-scrollbar h-full space-y-8 overflow-y-auto p-6">
            {isDatesLoaded &&
              dates.map((item, indx) => {
                return (
                  <div
                    className="space-y-2"
                    key={indx}
                  >
                    <div className="font-bold first-letter:uppercase">{item.monthTitle}</div>
                    <div className={clsx("grid grid-cols-7 gap-2")}>
                      {item.days.map((dayItem) => {
                        const isMatchFrom = date && date.from ? format(date.from, "yyyy-MM-dd") === format(dayItem.iso, "yyyy-MM-dd") : false
                        const isMatchTo = date && date.to ? format(date.to, "yyyy-MM-dd") === format(dayItem.iso, "yyyy-MM-dd") : false
                        const isBetweenStartAndEnd = date && date.from && date.to ? isWithinInterval(new Date(dayItem.iso), { start: date.from, end: date.to }) : false

                        const getIsTuesday = isTuesday(dayItem.iso)
                        const getIsWednesday = isWednesday(dayItem.iso)
                        const getIsThursday = isThursday(dayItem.iso)
                        const getIsFriday = isFriday(dayItem.iso)
                        const getIsSaturday = isSaturday(dayItem.iso)
                        const getIsSunday = isSunday(dayItem.iso)
                        const offsetNumber = getIsTuesday ? 2 : getIsWednesday ? 3 : getIsThursday ? 4 : getIsFriday ? 5 : getIsSaturday ? 6 : getIsSunday ? 7 : 1

                        return (
                          <div
                            style={{ gridColumnStart: offsetNumber }}
                            className={clsx("flex h-10 items-center")}
                            key={dayItem.iso}
                          >
                            <button
                              onClick={onSelectDate(dayItem.iso)}
                              className={clsx("inline-flex h-full flex-1 items-center justify-center", {
                                "rounded-l-lg bg-purple text-white": isMatchFrom,
                                "rounded-r-lg bg-purple text-white": isMatchTo,
                                "bg-purple/50 text-white": isBetweenStartAndEnd && !isMatchFrom && !isMatchTo,
                              })}
                            >
                              {format(dayItem.iso, "d")}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        {/* CONTENT END */}

        {/* FOOTER */}
        <AlertDialogFooter className="mt-auto h-auto flex-none p-6">
          <AlertDialogAction className="w-full rounded-none uppercase">Применить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
