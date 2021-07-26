import * as React from "react"
import Logo from "../images/susu-website-logo.png"
import tw from "twin.macro"
import Dropdownmenu from "./Dropdownmenu"
import HeaderLinkList from "./HeaderLinkList"
import Search from "./search"
import mainNavLinks from "../data/mainNavLinks"
import { Link } from "gatsby"

const searchIndices = [{ name: `Posts`, title: `Posts` }]

const HeaderContainer = tw.div`
  mt-4 mx-8 flex justify-between items-center
  lg:mx-20 
  xl:mx-28
`
console.log(mainNavLinks)
const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <img alt="Susu Logo" src={Logo} />
    </Link>
    <HeaderLinkList links={mainNavLinks} />
    <Dropdownmenu />
    <Search indices={searchIndices} />
  </HeaderContainer>
)

export default Header
