import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw from "twin.macro"
import BubbleLinkList from "../components/BubbleLinkList"
import HeroImage from "../components/HeroImage"
import { FlowerGraphSmall } from "../components/FlowerGraph"

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
      <div tw="w-56 mt-8 mx-auto">
        <FlowerGraphSmall />
        <h3 tw="mt-2">Do You or Will You Have Enough Money Saved To Retire?</h3>
        <p tw="mt-1">
          6 min read / <span tw="text-primary-700">By Sonny Sood</span>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
