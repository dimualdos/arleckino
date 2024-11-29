import { NextPageWithLayout } from "@/src/pages/_app"
import AboutPage from "../pages-flat/AboutPage"
import { GetStaticPropsContext } from "next"
import { NextSeo } from "next-seo"
import { getNextIntlPhrases } from "../server/getNextIntlPhrases"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <AboutPage />
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
