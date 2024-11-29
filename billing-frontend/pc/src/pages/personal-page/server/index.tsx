import { NextSeo } from "next-seo"
import { NextPageWithLayout } from "@/src/pages/_app"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"

interface PageProps {
  messages: any
}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
    <NextSeo title="Поддержка" />
    <h1>Поддержка</h1>
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
