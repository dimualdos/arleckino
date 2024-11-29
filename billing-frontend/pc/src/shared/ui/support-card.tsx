import { HelpDeskCase } from "@/src/gen/models/ts/HelpDeskCase"
import clsx from "clsx"
import { format } from "date-fns"
import React from "react"

type Props = {
  item: HelpDeskCase
  onClickItem: () => void
}

export const SupportCard = ({ item, onClickItem }: Props) => {
  const { is_unread, dt_create, status, dt_update } = item
  const statusTitle = status === "await" ? "В ожидании" : status === "open" ? "Открыт" : "Закрыт"
  return (
    <div
      onClick={onClickItem}
      className="cursor-pointer space-y-4 rounded-lg border border-grey-soft p-4"
    >
      {!is_unread || !is_unread.length || is_unread !== "false" ? null : <span className="rounded-full bg-purple px-2 py-0.5 text-sm text-white">Новое сообщение</span>}

      <div>
        <p className="text-grey-hard">Тема</p>
        <p className="font-bold">{item.subject}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-grey-hard">Статус</p>
          <p className="inline-flex items-center space-x-2 font-bold">
            <span>{status}</span>
            <span
              className={clsx("mt-0.5 size-2 rounded-full", {
                "bg-valid": status === "open",
                "bg-accent": status === "await",
                "bg-grey-soft": status === "close",
              })}
            ></span>
          </p>
        </div>
        <div>
          <p className="text-grey-hard">Номер</p>
          <p className="font-bold">{item.case_number}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-grey-hard">Создано</p>
          <p className="font-bold">{format(dt_create, "dd.MM.yyyy HH:mm")}</p>
        </div>
        <div>
          <p className="text-grey-hard">Обновлено</p>
          <p className="font-bold">{format(dt_update ?? dt_create, "dd.MM.yyyy HH:mm")}</p>
        </div>
      </div>
    </div>
  )
}
