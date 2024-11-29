import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import PageCurrentArticle from "@/src/pages-flat/PageCurrentArticle"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { GetStaticPaths, GetStaticPropsContext } from "next"
import { apiV1NewsListList } from "@/src/gen/clients/axios/apiService"

interface PageProps {}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "homePage"]),
    },
  }
}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageCurrentArticle />
    </>
  )
}

export default Page
