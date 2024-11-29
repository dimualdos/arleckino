import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectIcon } from "@/src/shared/ui/select"
import { ChevronDown } from "lucide-react"

import React from "react"
import { ParsedCountryProps } from "../types"
import { useTranslations } from "next-intl"

interface ComponentProps {
  parsedCountries: ParsedCountryProps[]
  selected: ParsedCountryProps | null
  onSelectCountry: (value: string) => void
}

export const AuthCountries = ({ parsedCountries, selected, onSelectCountry }: ComponentProps) => {
  const t = useTranslations("common")
  return (
    <Select onValueChange={onSelectCountry}>
      <SelectTrigger className="h-auto w-auto space-x-2 border-0 p-0 text-base text-accent">
        <div className="inline-flex items-center space-x-2 text-accent">
          <span>{!selected ? t("selectCountry") : selected.name}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{!selected ? t("selectCountry") : selected.name}</SelectLabel>
          {parsedCountries.map((item, indx) => (
            <SelectItem
              key={indx}
              value={item.code}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
