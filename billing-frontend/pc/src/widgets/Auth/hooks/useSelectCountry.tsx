import { useState } from "react"
import { ParsedCountryProps } from "../types"

interface ComponentProps {
  parsedCountries: ParsedCountryProps[]
  selectedCountry?: ParsedCountryProps | null
}

export const useSelectCountry = ({ parsedCountries, selectedCountry = null }: ComponentProps) => {
  const [selected, selectedSet] = useState<ParsedCountryProps | null>(selectedCountry)

  const onSelectCountry = (value: string) => {
    const match = parsedCountries.find((search) => search.code === value)
    if (!match) return
    selectedSet(match)
  }
  return { onSelectCountry, selected }
}
