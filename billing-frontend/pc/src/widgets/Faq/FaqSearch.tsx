import React from "react"
import { Button } from "@/src/shared/ui/button"
import { storeFilterSetContent } from "@/src/shared/store/appStore"
import { debounce } from "@/src/shared/helpers/debounce"
import { Input } from "@/src/shared/ui/input"
import { useTranslations } from "next-intl"

export const FaqSearch = () => {
  const hanldeSearch = debounce((event: { target: { value: any } }) => {
    const value = event.target.value
    storeFilterSetContent(value.toLowerCase())
  }, 500)
  const t = useTranslations("FAQ")

  return (
    <div className="space-y-2">
      {/* <label className="text-grey-hard">Поиск</label> */}
      <div className="flex space-x-2">
        <div className="relative min-w-[390px] flex-1 bg-background md:min-w-0">
          <Input
            placeholder={t("inputPlaceholder")}
            className="font-normal md:placeholder:text-transparent"
            onChange={hanldeSearch}
          />
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1056_10393)">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#BFBFBF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1056_10393">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Button
          className="size-10 min-w-10 p-0"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
