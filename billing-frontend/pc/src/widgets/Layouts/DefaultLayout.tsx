import { FC, ReactNode } from "react"
import { Footer } from "@/src/widgets/Footer"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
const PublicHeader = dynamic(import("@/src/widgets/PublicHeader/ui").then((module) => module.PublicHeader))

export type LayoutProps = { children?: ReactNode }

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const t = useTranslations("header")
  return (
    <>
      <PublicHeader />
      {children}
      <Footer />
    </>
  )
}
