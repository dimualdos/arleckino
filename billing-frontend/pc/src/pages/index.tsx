import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { PageHome } from "@/src/pages-flat/PageHome"
import { getNextIntlPhrases } from "../server/getNextIntlPhrases"
import { GetStaticPropsContext } from "next"

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
      <PageHome />
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
