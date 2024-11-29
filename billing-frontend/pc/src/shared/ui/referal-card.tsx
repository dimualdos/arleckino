import React from "react"

type Props = {
  items: Array<{ label: string; value: string }>
}

export const ReferalCard = ({ items }: Props) => {
  return (
    <div className="space-y-4 rounded-lg border border-grey-soft p-4">
      {items.map((item, indx) => {
        return (
          <div key={indx}>
            <p className="text-grey-hard">{item.label}</p>
            <p>{item.value}</p>
          </div>
        )
      })}
    </div>
  )
}
