import { FC } from "react"

import iconEmail from "@/public/icon-email.svg"
import iconTelegram from "@/public/icon-telegram.svg"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const Footer: FC<ComponentProps> = () => {
  const t = useTranslations("footer")
  return (
    <footer className="relative bg-purple-hard py-10">
      <div className="container grid grid-cols-2 lg:grid-cols-1 lg:gap-y-6">
        {/* NAV START */}
        <div className="grid grid-cols-2 gap-x-12 text-background sm:grid-cols-1 sm:space-x-0">
          <div className="space-y-3">
            <a
              className="inline-flex size-10 items-center justify-center rounded-full bg-[#606FC9]"
              href="https://telegram.me/sharavoztv_bot"
              target="_blank"
            >
              <Image
                src={iconTelegram.src}
                alt=""
                unoptimized
                width={iconTelegram.width}
                height={iconTelegram.height}
              />
            </a>
            <p>
              {t("telegram.title")}{" "}
              <a
                className="text-accent"
                target="_blank"
                href="https://telegram.me/sharavoztv_bot"
              >
                {t("telegram.btn")}
              </a>
            </p>
          </div>

          <div className="space-y-3 sm:-order-1 sm:mb-6">
            <a
              className="inline-flex size-10 items-center justify-center rounded-full bg-[#606FC9]"
              href="/"
              target="_blank"
            >
              <Image
                src={iconEmail.src}
                alt=""
                unoptimized
                width={iconEmail.width}
                height={iconEmail.height}
              />
            </a>
            <p>
              {t("email.title")}{" "}
              <a
                className="text-accent"
                target="_blank"
                href={`mailto:${t("email.btn")}`}
              >
                {t("email.btn")}
              </a>
            </p>
          </div>
        </div>
        {/* NAV END */}

        {/* DESCR START */}
        <div>
          <p className="ml-auto max-w-[363px] text-xs text-[#97A5F9] lg:max-w-none">
            {t("copyRights.recaptchaText")}
            <br />
            <br />
            {t("copyRights.address")} <br />
            <br /> {t("copyRights.copyRightText")}
          </p>
        </div>
        {/* DESCR END */}
      </div>
    </footer>
  )
}
