import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw from "twin.macro"
import BubbleLinkList from "../components/BubbleLinkList"

const HeroBanner = tw("div")`
  mt-4 pt-8 px-8 pb-20 bg-secondary-700
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
    <HeroBanner>
      <h1 tw="text-white">Let's talk about money</h1>
      <p tw="text-white mt-2">
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
  </Layout>
)

export default IndexPage
