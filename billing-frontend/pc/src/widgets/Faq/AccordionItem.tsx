import { useEffect, useState } from "react"
import iconTime from "@/public/icon-time.svg"
import clsx from "clsx"
import { NextRouter } from "next/router"
import { SharedQueryPageFaq } from "@/shared/types"
import { FaqItemProps, SubitemProps } from "@/src/pages-flat/PageFaq"
import iconTail from "@/public/icon-tail.svg"

interface ComponentProps {
  isLoading: boolean
  item: FaqItemProps
  router: NextRouter
  onSelectTagDesktop: (item: FaqItemProps) => void
  onSelectTagMobile: (item: FaqItemProps) => void
  onSelectQuestionHandler: (question_id: string | number) => void
}

// TODO: Unificate
const Tooltip = (props: { value: string }) => {
  return (
    <>
      <span className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 z-10 block w-[250px] -translate-x-1/2 rounded bg-background text-left opacity-0 shadow-tooltip transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus:pointer-events-auto group-focus:opacity-100">
        <span className="relative block px-4 py-2">
          <span>{props.value}</span>
          <img
            className="absolute left-1/2 top-full -translate-x-1/2"
            src={iconTail.src}
            width={iconTail.width}
            height={iconTail.height}
            alt=""
          />
        </span>
      </span>
    </>
  )
}

export const AccordionItem = ({ item, onSelectTagDesktop, onSelectTagMobile, onSelectQuestionHandler, router, isLoading }: ComponentProps) => {
  const { id, label, subItems } = item

  const query = router.query as SharedQueryPageFaq

  const [active, setActive] = useState(false)

  const onSelectTagDesktopHandler = (item: FaqItemProps) => {
    onSelectTagDesktop(item)
  }
  useEffect(() => {
    if (query.selected_tag && item.id === query.selected_tag) setActive(true)
    if (!query.selected_tag || item.id !== query.selected_tag) setActive(false)
  }, [router])

  return (
    <div className="rounded-lg bg-background">
      <button
        onClick={() => onSelectTagDesktopHandler(item)}
        className="flex w-full items-center px-6 py-4 md:hidden"
      >
        <span className="truncate font-bold first-letter:uppercase">{label}</span>
        <svg
          className={clsx("ml-auto min-w-3 md:-rotate-90", {
            "rotate-180": active,
          })}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"
            fill="#FF9800"
          />
        </svg>
      </button>

      <button
        onClick={() => onSelectTagMobile(item)}
        className="hidden w-full items-center px-6 py-4 md:flex"
      >
        <span className="truncate font-bold">{label}</span>
        <svg
          className={clsx("ml-auto min-w-3 transition-all duration-300 md:-rotate-90", {
            "rotate-180": active,
          })}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"
            fill="#FF9800"
          />
        </svg>
      </button>

      <div
        className={clsx("grid md:hidden", {
          "hidden grid-rows-[0fr] opacity-0": !active,
          "transition-height height-auto block grid-rows-[1fr] opacity-100": active,
        })}
      >
        <div>
          <div className="flex flex-col space-y-4 pb-4">
            {!subItems || !subItems.length
              ? null
              : subItems.map((subitem, subIndex) => {
                  const parseText = subitem.question_title.length > 24 ? `${subitem.question_title.slice(0, 24)}...` : subitem.question_title
                  return (
                    <div
                      className={clsx("relative inline-flex cursor-pointer items-center px-8 text-left", {})}
                      key={`${id}-${subIndex}`}
                    >
                      <button
                        className={clsx("truncate outline-none transition-all duration-300 hover:text-accent focus:text-accent", {
                          "text-accent": router.query.selected_question_id === subitem.id,
                        })}
                        onClick={() => onSelectQuestionHandler(subitem.id!)}
                      >
                        {parseText}
                      </button>
                      {!subitem.question_text || !subitem.question_text.length ? null : (
                        <button className="group relative ml-2 outline-none">
                          <img
                            className="-translate-y-2"
                            src={iconTime.src}
                            width={iconTime.width}
                            height={iconTime.height}
                            alt=""
                          />
                          <Tooltip value={subitem.question_text} />
                        </button>
                      )}
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  )
}
