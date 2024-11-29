import clsx from "clsx"
import React from "react"

type Props = {}

export const LoadingOS = (props: Props) => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, indx) => (
        <div
          key={indx}
          className={clsx("relative w-22 rounded-lg bg-grey-extra-soft mb-3 text-transparent placeholder:bg-transparent")}
        >
          Загрузка данных...
        </div>
      ))}
    </>
  )
}
