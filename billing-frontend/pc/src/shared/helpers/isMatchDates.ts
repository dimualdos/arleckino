import { format } from "date-fns"

export const isMatchDates = (date1: string | Date, date2: string | Date) => {
  const start = format(date1, "yyyy-MM-dd")
  const end = format(date2, "yyyy-MM-dd")
  return start === end
}
