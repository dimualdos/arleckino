import { NextSeo } from "next-seo"
import { NextPageWithLayout } from "@/src/pages/_app"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { PersonalDevicesPage } from "@/src/pages-flat/Personal/PersonalDevicesPage"

interface PageProps {
  messages: any
}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PersonalDevicesPage />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "homePage"]),
    },
  }
}

export default Page
