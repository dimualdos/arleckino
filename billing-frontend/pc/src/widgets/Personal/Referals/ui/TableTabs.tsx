import clsx from "clsx"
import Link from "next/link"
import React, { useEffect } from "react"
import { PageQueries } from "../types"
import { buttonVariants } from "@/src/shared/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { useTranslations } from "next-intl"

type Props = {
  queries: PageQueries
}

export const TableTabs = ({ queries }: Props) => {
  const t = useTranslations("referals")
  const { view } = queries
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    duration: 60,
    dragFree: true,
    containScroll: "trimSnaps",
  })

  useEffect(() => {
    if (view === "transactions") {
      emblaApi?.scrollTo(0, true)
    }
    if (view === "links") {
      emblaApi?.scrollTo(1, true)
    }
    if (view === "requests") {
      emblaApi?.scrollTo(2, true)
    }
  }, [view])

  return (
    <>
      {/* DESKTOP */}
      <div className="flex lg:hidden">
        <Link
          scroll={false}
          href="/personal-page/referrals?view=transactions"
          className={buttonVariants({
            variant: !view || view === "transactions" ? "yellow" : "white",
            className: clsx("rounded-r-none border-r-0", {
              "shaddow-bold": !view || view === "transactions",
            }),
          })}
        >
          {t("tabs.referals")}
        </Link>
        <div
          className={clsx("h-auto w-px self-stretch", {
            "bg-accent": !view || view === "transactions" || view === "links",
            "bg-grey": view === "requests",
          })}
        ></div>
        <Link
          scroll={false}
          href="/personal-page/referrals?view=links"
          className={buttonVariants({
            variant: view === "links" ? "yellow" : "white",
            className: clsx("rounded-none border-x-0", {
              "shaddow-bold": view === "links",
            }),
          })}
        >
          {t("tabs.links")}
        </Link>
        <div
          className={clsx("h-auto w-px self-stretch", {
            "bg-accent": view === "links" || view === "requests",
            "bg-grey": !view || view === "transactions",
          })}
        ></div>
        <Link
          scroll={false}
          href="/personal-page/referrals?view=requests"
          className={buttonVariants({
            variant: view === "requests" ? "yellow" : "white",
            className: clsx("rounded-l-none !border-l-0", {
              "shaddow-bold": view === "requests",
            }),
          })}
        >
          {t("tabs.requests")}
        </Link>
      </div>

      {/* MOBILE */}
      <div className="overflow-hidden">
        <div className="hidden border-b border-b-grey-soft px-6 lg:block">
          <div className="embla">
            <div
              className="embla__viewport"
              ref={emblaRef}
            >
              <div className="embla__container items-center space-x-8 whitespace-nowrap lg:flex">
                <Link
                  className={clsx("relative pb-3", {
                    "text-accent": !view || view === "transactions",
                  })}
                  scroll={false}
                  href="/personal-page/referrals?view=transactions"
                >
                  <span>{t("tabs.referals")}</span>
                  <span
                    className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent", {
                      "opacity-0": view !== "transactions",
                      "opacity-100": !view || view === "transactions",
                    })}
                  />
                </Link>
                <Link
                  className={clsx("relative pb-3", {
                    "text-accent": view === "links",
                  })}
                  scroll={false}
                  href="/personal-page/referrals?view=links"
                >
                  <span> {t("tabs.links")}</span>
                  <span
                    className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent", {
                      "opacity-0": view !== "links",
                      "opacity-100": view === "links",
                    })}
                  />
                </Link>

                <Link
                  className={clsx("relative pb-3", {
                    "text-accent": view === "requests",
                  })}
                  scroll={false}
                  href="/personal-page/referrals?view=requests"
                >
                  <span> {t("tabs.requests")}</span>
                  <span
                    className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent", {
                      "opacity-0": view !== "requests",
                      "opacity-100": view === "requests",
                    })}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
