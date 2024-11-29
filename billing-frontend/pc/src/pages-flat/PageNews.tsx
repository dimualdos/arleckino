import Image from "next/image"
import { AppHeader } from "@/src/widgets/AppHeader"
import Link from "next/link"
import { FaqPagination } from "@/src/widgets/FaqPagination"
import { useRouter } from "next/router"
import { SharedQueryPageNews } from "@/src/shared/types"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import qs from "query-string"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ApiV1NewsListListQueryResponse } from "../gen/models/ts/apiController/ApiV1NewsListList"
import { useApiV1NewsListList } from "../gen/clients/hooks/apiController/useApiV1NewsListList"
import parse from "html-react-parser"

interface ComponentProps {}

export const PageNews = ({}: ComponentProps) => {
  const router = useRouter()
  const query = router.query as SharedQueryPageNews
  const availablePageNumbers = [5, 10, 15, 20, 25, 30]
  const t = useTranslations("news")
  const [pageSize, pageSizeSet] = useState(10)

  const [pageNumber, pageNumberSet] = useState(1)

  useEffect(() => {
    if (query.pageSize) {
      pageSizeSet(parseInt(query.pageSize))
    }
    if (query.page) {
      pageNumberSet(parseInt(query.page))
    }
  }, [query])

  const { data, isLoading, isError, error } = useApiV1NewsListList({ page: pageNumber, limit: pageSize, is_news_pages: "true" })

  const { count, next, previous, results } = data?.data ?? ({} as ApiV1NewsListListQueryResponse)

  const onSelectPageSize = () => async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = e.target.value
    const currentUrl = qs.exclude(router.asPath, ["pageSize, page"], {
      arrayFormat: "comma",
      encode: false,
    })
    const prepareUrl = qs.stringifyUrl(
      {
        url: currentUrl,
        query: {
          page: 1,
          pageSize: pageSize,
        },
      },
      {
        encode: false,
      },
    )
    await router.push(prepareUrl, undefined, { shallow: true })
  }
  if (isLoading) {
    // TODO ВЕРСТКА - loader страницы
    return <>Loading</>
  }
  return (
    <div className="flex flex-1 flex-col">
      <AppHeader className="space-y-2 lg:space-y-1">
        <h1>{t("title")}</h1>
      </AppHeader>
      <div className="flex-1 bg-blue-soft">
        <div className="md:rounded-t-8 mb-12 mt-10 md:mb-10 md:mt-4 md:bg-background md:pb-6 md:pt-4">
          {/* NEWS START */}
          <div className="container grid grid-cols-3 gap-x-12 gap-y-15 lg:grid-cols-2 md:gap-8 sm:grid-cols-1">
            {results?.map((news, indx) => {
              return (
                <div key={indx}>
                  <div className="relative mb-6 h-[186px] overflow-hidden rounded-lg md:mb-4 sm:h-[164px]">
                    <Image
                      unoptimized
                      className="absolute inset-0 h-full w-full object-cover"
                      fill
                      src={"https://placehold.co/600x400"}
                      alt=""
                    />
                  </div>

                  <time
                    className="mb-1 text-sm text-grey-hard"
                    dateTime="2020-06-19"
                  >
                    {news.created_date?.toString()}
                  </time>
                  <p className="mb-2 text-2xl font-semibold">{news.title}</p>
                  <p className="line-clamp-5">{parse(news.short_text!)}</p>

                  <Link
                    className="mt-4 inline-block text-accent"
                    href={`/news/${news.id}`}
                  >
                    Подробнее
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="container mt-56 flex justify-between md:mt-10 md:block">
            {/* <div className="mb-4 hidden md:block">
              <Button
                variant={"outline"}
                className="w-full font-semibold uppercase"
              >
                дальше
              </Button>
            </div> */}

            <FaqPagination
              meta={{
                page: query.page ? parseInt(query.page) : 1,
                total: count ? count : 1,
                pageSize: query.pageSize ? parseInt(query.pageSize) : 10,
              }}
              baseRoute="/news"
            />

            <div className="relative md:hidden">
              <select
                defaultValue={query.pageSize ? parseInt(query.pageSize) : 10}
                onChange={onSelectPageSize()}
                className={buttonVariants({ className: "inline-flex appearance-none items-center border-grey-soft pr-12", variant: "outline" })}
                name="pageCount"
                id="pageCount"
              >
                {availablePageNumbers.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item} на стр.
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z"
                  fill="#BFBFBF"
                />
              </svg>
            </div>
          </div>
          {/* NEWS END */}
        </div>
      </div>
    </div>
  )
}
