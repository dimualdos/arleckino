import { useCopy } from "@/src/shared/hooks/useCopy"
import clsx from "clsx"
import { CheckCheck, ChevronDown, Copy } from "lucide-react"
import React, { useState } from "react"

type Props = {
  name: string
  links: string[] | string | undefined
  archiveContent?: string // Для туултипа
  mediaContent?: string // Для туултипа
}

export const FaqItem = ({ name, links, archiveContent, mediaContent }: Props) => {
  const [selected, selectedSet] = useState(false)
  const handleSelect = () => selectedSet((prev) => !prev)
  const { isCopied, onHandleCopy, copiedState } = useCopy()

  return (
    <div className="overflow-hidden rounded-xl border border-grey-soft">
      <button
        className={clsx("inline-flex w-full items-center space-x-4.5 border-b bg-purple-soft px-4.5 py-4 text-left transition-all duration-300 lg:p-4", {
          "border-transparent": !selected,
          "border-grey-soft": selected,
        })}
        onClick={handleSelect}
      >
        <ChevronDown
          className={clsx("text-purple transition-all duration-300", {
            "rotate-180": selected,
          })}
        />
        <span>{name}</span>
      </button>

      {/* CONTENT START */}
      <div
        className={clsx("grid transition-all duration-300", {
          "grid-rows-[0fr] opacity-0": !selected,
          "grid-rows-[1fr]": selected,
        })}
      >
        <div className="overflow-hidden break-words">
          <div className="flex flex-col space-y-3 px-14 py-5 lg:px-4 lg:py-6">
            {!links || !Array.isArray(links)
              ? null
              : links?.map((link) => (
                  <button
                    key={link}
                    onClick={onHandleCopy(link, "Ссылка скопирована")}
                    className="relative flex items-center pl-8"
                  >
                    <Copy
                      className={clsx("absolute left-0 top-1/2 size-5 -translate-y-1/2 text-accent transition-all duration-300", {
                        "opacity-100": !isCopied && copiedState.value !== link,
                        "scale-50 opacity-0": isCopied && copiedState.value === link,
                      })}
                    />
                    <CheckCheck
                      className={clsx("absolute left-0 top-1/2 size-5 -translate-y-1/2 text-accent transition-all duration-300", {
                        "opacity-100": isCopied && copiedState.value === link,
                        "scale-50 opacity-0": !isCopied || copiedState.value !== link,
                      })}
                    />
                    <span>{link}</span>
                  </button>
                ))}
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  )
}
