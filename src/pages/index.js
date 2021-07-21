import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Logo from "../images/susu-website-logo.png"
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import BubbleLinkList from "../components/BubbleLinkList"

const Header = styled.div`
  ${tw`mt-4 mx-8 flex justify-between items-center`}
`

const HeroBanner = tw("div")`
  mt-4 pt-8 px-8 pb-20 bg-secondary-700
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header>
      <img src={Logo} />
      <FontAwesomeIcon
        icon={faBars}
        style={{ width: "2rem", height: "2rem" }}
      />
    </Header>
    <BubbleLinkList
      tw="mt-4 ml-8"
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
          { to: "#", text: "Latest" },
          { to: "#", text: "FSC Regulations" },
        ]}
      />
    </HeroBanner>
  </Layout>
)

export default IndexPage
