import { PageComponents } from "../pages-flat/PageComponents"
import { GetStaticPropsContext, NextPage } from "next"
import { NextSeo } from "next-seo"
import { getNextIntlPhrases } from "../server/getNextIntlPhrases"

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageComponents />
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
