import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw from "twin.macro"
import BubbleLinkList from "../components/BubbleLinkList"
import HeroImage from "../components/HeroImage"
import BlogPostCardList from "../components/BlogPostCardList"

const BubbleLinksContainer = tw("div")`
  ml-8
  lg:ml-20
  xl:ml-28
`

const HeroBanner = tw("div")`
  mt-4 pt-8 px-8 pb-20 bg-secondary-700
  md:pt-12
  lg:mx-8 lg:py-16 lg:px-12 lg:rounded-lg
  xl:px-24
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <BubbleLinksContainer>
      <BubbleLinkList
        links={[
          { to: "#", text: "Loans" },
          { to: "#", text: "Credit Cards" },
          { to: "#", text: "Mortgages" },
          { to: "#", text: "FSC" },
          { to: "#", text: "BWUCCU" },
          { to: "#", text: "See All Articles" },
        ]}
      />
    </BubbleLinksContainer>
    <HeroBanner>
      <h1 tw="text-white">Let's Talk About Money</h1>
      <p tw="text-white mt-2 md:text-md">
        Stay up to date with the latest trends in Credit Union News and Personal
        Finance.
      </p>
      <BubbleLinkList
        links={[
          { isActive: true, to: "#", text: "Latest" },
          { to: "#", text: "FSC Regulations" },
        ]}
      />
    </HeroBanner>
    <HeroImage />
    <section>
      <h2 tw="text-center text-primary-700">Latest</h2>
      <BlogPostCardList
        postInfoList={[
          {
            title: "Do You or Will You Have Enough Money Saved To Retire?",
            author: "Sonny Sood",
            readTime: "6",
          },
          {
            title: "8 Great Money Lessons You Should Teach to Your Kids",
            author: "Jovan Medford",
            readTime: "6",
          },
        ]}
      />
    </section>
  </Layout>
)

export default IndexPage
