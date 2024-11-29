import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/router"
import qs from "query-string"
import { buttonVariants } from "@/src/shared/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMedia } from "react-use"

interface ComponentProps {
  meta: {
    page: number
    total: number
    pageSize: number
  }
  baseRoute: string
}

interface FooProps {
  arr: number[]
  step?: number
  currentPage: number
}

const renderDots = () => {
  return (
    <svg
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
        fill="#BFBFBF"
      />
    </svg>
  )
}

export const FaqPagination = ({ meta: { page, total, pageSize }, baseRoute }: ComponentProps) => {
  const isSmall = useMedia("(max-width: 767px)", true)

  const router = useRouter()
  const pagesToShow = 5
  const lastPage = Math.ceil(total / pageSize)
  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2))
  const endPage = Math.min(lastPage, startPage + pagesToShow - 1)

  const totalPages = Math.min(endPage - startPage + 1, pagesToShow)
  const getPageLink = (pageNum: number) => {
    const currentUrl = qs.exclude(router.asPath, ["page"], {
      arrayFormat: "comma",
      encode: false,
    })
    const prepareUrl = qs.stringifyUrl(
      {
        url: currentUrl,
        query: {
          page: pageNum,
        },
      },
      {
        encode: false,
      },
    )

    return prepareUrl
  }

  if (total <= 2) return null
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:justify-center sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
      <nav className="no-scrollbar inline-flex space-x-2 md:space-x-0">
        {page > 1 && (
          <Link
            shallow
            className={buttonVariants({ variant: "transparent", size: "none", className: "size-6 p-0 text-foreground md:hidden" })}
            href={`${getPageLink(page - 1)}`}
          >
            <ChevronLeft />
          </Link>
        )}

        {startPage > 1 && (
          <Link
            shallow
            className={buttonVariants({ variant: "transparent", size: "none", className: "size-6 p-0 md:hidden" })}
            href={getPageLink(1)}
          >
            1
          </Link>
        )}

        {startPage > 2 && <span className="pointer-events-none inline-flex size-6 items-center justify-center md:hidden">{renderDots()}</span>}

        {/* DESKTOP */}
        <div className="flex items-center space-x-2 md:hidden">
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage).map((pageNum) => (
            <Link
              className={buttonVariants({
                variant: pageNum === page ? "outline" : "transparent",
                size: "none",
                className: clsx("inline-flex size-6 items-center justify-center !bg-transparent p-0 leading-none md:hidden", {}),
              })}
              shallow
              key={pageNum}
              href={getPageLink(pageNum)}
            >
              <span>{pageNum}</span>
            </Link>
          ))}
        </div>

        {/* MOBILE */}
        <div className="hidden items-center space-x-2 md:flex">
          {Array.from({ length: totalPages }, (_, i) => i + startPage).map((pageNum) => (
            <Link
              className={buttonVariants({
                variant: pageNum === page ? "accent" : "grey",
                size: "none",
                className: clsx("inline-flex size-8 items-center justify-center p-0 leading-none", {}),
              })}
              shallow
              key={pageNum}
              href={getPageLink(pageNum)}
            >
              <span>{pageNum}</span>
            </Link>
          ))}
        </div>

        {endPage < lastPage - 1 && <span className="inline-flex size-6 items-center justify-center md:hidden">{renderDots()}</span>}

        {endPage < lastPage && (
          <Link
            className={buttonVariants({
              variant: "transparent",
              size: "none",
              className: clsx("inline-flex size-6 items-center justify-center !bg-transparent p-0 leading-none md:hidden", {}),
            })}
            shallow
            href={getPageLink(lastPage)}
          >
            {lastPage}
          </Link>
        )}

        {page < lastPage && (
          <Link
            shallow
            className={buttonVariants({ variant: "transparent", size: "none", className: "size-6 p-0 text-foreground md:hidden" })}
            href={getPageLink(page + 1)}
          >
            <ChevronRight />
          </Link>
        )}
      </nav>
    </div>
  )
}
