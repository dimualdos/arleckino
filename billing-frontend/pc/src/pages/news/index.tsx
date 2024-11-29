import { ApiV1NewsListListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1NewsListList"
import { PageNews } from "@/src/pages-flat/PageNews"
import { NextPageWithLayout } from "@/src/pages/_app"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { GetStaticPropsContext } from "next"
import { NextSeo } from "next-seo"

interface PageProps {
  messages: any
  newsList: ApiV1NewsListListQueryResponse
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "news"]),
    },
  }
}

const Page: NextPageWithLayout<PageProps> = ({ newsList }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageNews />
    </>
  )
}

export default Page
