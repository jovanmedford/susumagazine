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
      links={[
        { to: "#", text: "Loans" },
        { to: "#", text: "Credit Cards" },
        { to: "#", text: "Mortgages" },
        { to: "#", text: "FSC" },
        { to: "#", text: "BWUCCU" },
        { to: "#", text: "See All Articles" },
      ]}
    />
  </Layout>
)

export default IndexPage
