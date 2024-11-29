import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import { PageSuccessEmail } from "@/src/pages-flat/Auth/PageSuccessEmail"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"
import { GetStaticPropsContext } from "next"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageSuccessEmail />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: await getNextIntlPhrases(locale, ["header", "footer", "authorization"]),
    },
  }
}

export default Page
