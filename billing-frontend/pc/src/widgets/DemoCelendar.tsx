import React, { useState } from "react"
import { format, addDays } from "date-fns"

export const DemoCelendar: React.FC = () => {
  const [selectedFrom, setSelectedFrom] = useState<Date | null>(null)
  const [selectedTo, setSelectedTo] = useState<Date | null>(null)
  const startDate = new Date()
  const endDate = addDays(startDate, 365)
  const dates = []
  let currentDate = startDate

  while (currentDate <= endDate) {
    dates.push(currentDate)
    currentDate = addDays(currentDate, 1)
  }

  const handleSelectDate = (date: Date) => {
    if (!selectedFrom) {
      setSelectedFrom(date)
    } else if (!selectedTo) {
      if (date >= selectedFrom) {
        setSelectedTo(date)
      } else {
        setSelectedFrom(date)
        setSelectedTo(null)
      }
    } else {
      setSelectedFrom(date)
      setSelectedTo(null)
    }
  }

  return (
    <div className="h-screen overflow-y-scroll p-4">
      {dates.map((date) => (
        <div
          key={date.toISOString()}
          className={`border p-2 ${selectedFrom && selectedTo && date >= selectedFrom && date <= selectedTo ? "bg-blue-200" : ""} ${
            selectedFrom && format(date, "yyyy-MM-dd") === format(selectedFrom, "yyyy-MM-dd") ? "bg-blue-400" : ""
          }`}
          onClick={() => handleSelectDate(date)}
        >
          {format(date, "yyyy-MM-dd")}
        </div>
      ))}
    </div>
  )
}