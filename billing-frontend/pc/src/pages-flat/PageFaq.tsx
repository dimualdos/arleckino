import iconTime from "@/public/icon-time.svg"
import { SharedQueryPageFaq } from "@/src/shared/types"
import { AppHeader } from "@/src/widgets/AppHeader"
import { AccordionItem } from "@/src/widgets/Faq/AccordionItem"
import { FaqSearch } from "@/src/widgets/Faq/FaqSearch"
import { Loader } from "@/src/widgets/Loader"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { FaqList } from "../gen/models/ts/FaqList"
import { ApiV1FaqListListQueryResponse } from "../gen/models/ts/apiController/ApiV1FaqListList"
import { ApiV1FaqTagsListQueryResponse } from "../gen/models/ts/apiController/ApiV1FaqTagsList"
import { useApiV1FaqRead } from "../gen/clients/hooks/apiController/useApiV1FaqRead"
import { AppStore } from "../shared/store/appStore"
const FaqDialog = dynamic(import("../widgets/Faq/FaqDialog").then((module) => module.FaqDialog))

interface ComponentProps {
  faqList: ApiV1FaqListListQueryResponse
  faqTags: ApiV1FaqTagsListQueryResponse
}

export interface FaqItemProps {
  id: string
  label: string
  subItems: ApiV1FaqListListQueryResponse | undefined
}

export interface SubitemProps {
  tagId: string
  id: string
  label: string
  description?: string
  content: ContentProps
}

interface ContentProps {
  html: ReactNode
}

const PageFaq = ({ faqList, faqTags }: ComponentProps) => {
  // TODO: handle error
  // @ts-ignore
  const parsedFaqTags = faqTags.filter((tag) => faqList.some((faq) => faq.tags?.includes(tag.id)))
  const faqFilter = AppStore.useState((s) => s.faqFilter)
  const t = useTranslations("FAQ")

  const router = useRouter()
  const query = router.query as SharedQueryPageFaq
  const [isLoading, setIsLoading] = useState(false)
  const selected_tag = query.selected_tag
  const selected_question_id = query.selected_question_id
  const [dataFaqByTag, setFaqByTag] = useState<FaqList[]>()
  
  const dataAdticle = useApiV1FaqRead(selected_question_id!, { query: { enabled: !!selected_question_id } })

  useEffect(() => {
    selected_tag && setFaqByTag(faqList.filter((item) => item.tags?.includes(+selected_tag)))
  }, [selected_tag, faqList])

  useEffect(() => {
    selected_question_id && setIsLoading(true)
  }, [selected_question_id])

  useEffect(() => {
    dataAdticle.data?.data && setIsLoading(false)
  }, [dataAdticle])

  useEffect(()=>{
    if (Object.keys(router.query).length === 0) {
      setFaqByTag(undefined)
    }
  },[router.query])

  const onSelectTagDesktop = (item: FaqItemProps) => {
    if (selected_tag && selected_tag === item.id) {
      router.push(
        {
          pathname: "/faq",
          query: {},
        },
        undefined,
        {
          shallow: true,
        },
      )
    } else {
      router.push(
        {
          pathname: "/faq",
          query: { selected_tag: item.id },
        },
        undefined,
        {
          shallow: true,
        },
      )
    }
  }

  const onSelectTagMobile = (item: FaqItemProps) => {
    if (selected_tag && selected_tag === item.id) {
      router.push(
        {
          pathname: "/faq",
          query: {},
        },
        undefined,
        {
          shallow: true,
        },
      )
    } else {
      router.push(
        {
          pathname: "/faq",
          query: { selected_tag: item.id },
        },
        undefined,
        {
          shallow: true,
        },
      )
    }
  }

  const onSelectQuestionHandler = (article_id: string | number) => {
    router.push(
      {
        pathname: "/faq",
        query: { selected_tag: selected_tag, selected_question_id: article_id },
      },
      undefined,
      {
        shallow: true,
      },
    )
  }

  return (
    <div className="flex flex-col">
      <AppHeader
        className={clsx("flex-row items-center justify-between space-y-2 lg:space-y-1 md:flex-col md:items-start", {
          "md:hidden": selected_question_id,
        })}
      >
        <span
          className={clsx("", {
            "md:hidden": selected_tag || selected_question_id,
          })}
        >
          {t("title")}
        </span>
        <span className={clsx("md:hidden")}>
          <FaqSearch />
        </span>

        <span
          className={clsx("hidden", {
            "md:block": selected_tag,
          })}
        >
          {selected_tag}
        </span>
        <span
          className={clsx("hidden text-base font-medium", {
            "text-grey-extra-hard md:block": selected_tag && !selected_question_id,
            "md:hidden": selected_question_id,
          })}
        >
          {t("title")}
        </span>
      </AppHeader>

      {/* MOBILE END */}

      <div
        className={clsx("flex-1 bg-blue-soft md:bg-blue-soft", {
          "md:!bg-background": dataAdticle.data?.data,
        })}
      >
        <div className="container flex pb-6 pt-10 md:block md:pb-10 md:pt-4">
          {/* MOBILE SEARCH */}
          <div
            className={clsx("mb-6 hidden md:block", {
              "md:hidden": selected_tag || selected_question_id,
            })}
          >
            <FaqSearch />
          </div>

          {/* SIDEBAR START */}
          <div className="mr-3 min-w-[290px] max-w-[290px] md:mr-0 md:min-w-full md:max-w-full">
            {/* LAST START */}
            <div
              className={clsx("mb-8 space-y-2", {
                "md:hidden": dataFaqByTag
              })}
            >
              {parsedFaqTags.map((item, indx) => {
                return (
                  <AccordionItem
                    router={router}
                    item={{
                      id: `${item.id}`,
                      label: item.title,
                      subItems: !dataFaqByTag ? [] : dataFaqByTag,
                    }}
                    onSelectTagDesktop={onSelectTagDesktop}
                    onSelectTagMobile={onSelectTagMobile}
                    onSelectQuestionHandler={onSelectQuestionHandler}
                    key={indx}
                    isLoading={true}
                  />
                )
              })}
            </div>
            {/* LAST END */}
            <div
              className={clsx("space-y-5", {
                "md:hidden": selected_tag || selected_question_id,
              })}
            >
              <p className="text-sm">
                {t("modalQuiestion1")}
                <br /> {t("modalQuiestion2")}
              </p>
              <FaqDialog />
            </div>
          </div>
          {/* SIDEBAR END */}

          {/* CONTENT START */}
          <div
            className={clsx("md:rounded-0 flex-1 self-start rounded-lg bg-background p-6 md:bg-transparent md:p-0", {
              "md:hidden": !selected_tag,
              "md:block": selected_tag,
            })}
          >
            <p className="border-b border-b-grey-soft pb-2 text-2xl font-semibold md:hidden">{!dataAdticle.data?.data ? t("questionTitle") : dataAdticle.data?.data.question_title}</p>
            {/* FOR DESKTOP */}
            <div className="mt-6 space-y-6 md:mt-0 md:space-y-2">
              {isLoading ? (
                <Loader />
              ) : !dataAdticle.data?.data ? (
                faqList
                  .filter((item) => {
                    const searchInTitle = item.question_title?.toLowerCase().indexOf(faqFilter) > -1
                    const searchIntext = item.question_text ? item.question_text?.toLowerCase().indexOf(faqFilter) > -1 : false

                    if (!faqFilter) return true
                    return searchInTitle || searchIntext
                  })
                  .map((item, indx) => (
                    <button
                      onClick={() => onSelectQuestionHandler(item.id!)}
                      className="block text-left md:w-full md:rounded-lg md:bg-background md:p-4"
                      key={indx}
                    >
                      <span className="block">{item.question_title}</span>
                      {!item.question_text || !item.question_text.length ? null : (
                        <span className="hidden space-x-3 text-xs text-grey-extra-hard md:inline-flex">
                          <img
                            className="w-3"
                            src={iconTime.src}
                            width={iconTime.width}
                            height={iconTime.height}
                            alt=""
                          />
                          <span>{item.question_text}</span>
                        </span>
                      )}
                    </button>
                  ))
              ) : (
                <div
                  className="typography md:hidden"
                  dangerouslySetInnerHTML={{ __html: `${dataAdticle.data?.data.answers![0]}` }}
                />
              )}
            </div>
          </div>
          {/* CONTENT END */}
          <div
            className={clsx("typography hidden", {
              "md:block": dataAdticle.data?.data,
            })}
          >
            <p className="mb-6 text-2xl font-semibold">{dataAdticle.data?.data ? dataAdticle.data?.data.question_title : null}</p>
            {!dataAdticle.data?.data ? null : <div dangerouslySetInnerHTML={{ __html: `${dataAdticle.data?.data.answers![0]}` }} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFaq
