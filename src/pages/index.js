import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Logo from "../images/susu-website-logo.png"
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
  </Layout>
)

export default IndexPage
