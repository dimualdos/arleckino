import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import CopyrightPage from "../pages-flat/CopyrightPage"
import { GetStaticPropsContext } from "next"
import { getNextIntlPhrases } from "../server/getNextIntlPhrases"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <CopyrightPage />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "pageCopyright"]),
    },
  }
}

export default Page
