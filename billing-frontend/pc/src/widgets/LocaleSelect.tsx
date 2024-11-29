import { useRouter } from "next/router"
import { LOCALE_NAMES } from "../shared/consts"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"

export const LocaleSelect = () => {
  const { asPath, pathname, replace, locales, locale } = useRouter()

  const onChangeLang = (e: string) => {
    const match = LOCALE_NAMES.find((search) => search.value === e)
    if (match) {
      replace(pathname, asPath, {
        locale: match?.value,
        scroll: false,
      })
    }
  }

  if (!locales || !locales.length || !locale || !locale.length) return

  return (
    <Select
      onValueChange={onChangeLang}
      defaultValue={locale}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((item, indx) => (
          <SelectItem
            className="uppercase"
            key={indx}
            value={item}
          >
            <span className="uppercase">{item}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
