import { NextPageWithLayout } from "@/src/pages/_app"
import { NextSeo } from "next-seo"
import PageFaq from "@/src/pages-flat/PageFaq"
import { GetStaticPropsContext } from "next"
import { apiService } from "@/src/gen/clients/axios"
import { ApiV1FaqListListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1FaqListList"
import { ApiV1FaqTagsListQueryResponse } from "@/src/gen/models/ts/apiController/ApiV1FaqTagsList"
import { getNextIntlPhrases } from "@/src/server/getNextIntlPhrases"

interface PageProps {
  faqList: ApiV1FaqListListQueryResponse
  faqTags: ApiV1FaqTagsListQueryResponse
  messages: any
}

const Page: NextPageWithLayout<PageProps> = ({ faqList, faqTags }) => {
  return (
    <>
      <NextSeo
        title="Sharavoz"
        description="Sharavoz"
      />
      <PageFaq
        faqList={faqList}
        faqTags={faqTags}
      />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { data: faqList } = await apiService.apiV1FaqListList()
  const { data: faqTags } = await apiService.apiV1FaqTagsList()
  return {
    props: {
      faqList,
      faqTags,
      messages: await getNextIntlPhrases(locale, ["header", "footer", "FAQ"]),
    },
  }
}

export default Page
