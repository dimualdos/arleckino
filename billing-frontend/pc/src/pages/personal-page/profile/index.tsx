import { NextSeo } from "next-seo"
import { NextPageWithLayout } from "@/src/pages/_app"
import { PersonalMainPage } from "@/src/pages-flat/Personal/PersonalMainPage"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"

interface PageProps {
  messages: any
}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo title="Настройки профиля" />
      <PersonalMainPage />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "profileSettings"]),
    },
  }
}

export default Page
