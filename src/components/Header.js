import * as React from "react"
import Logo from "../images/susu-website-logo.png"
import tw from "twin.macro"
import Dropdownmenu from "./Dropdownmenu"
import HeaderLinkList from "./HeaderLinkList"
import Search from "./search"
import mainNavLinks from "../data/mainNavLinks"
import { Link } from "gatsby"

const searchIndices = [{ name: `Posts`, title: `Posts` }]

const HeaderContainer = tw("div")`
  mt-4 mx-8 md:flex md:justify-between items-center
  lg:mx-20 
  xl:mx-28
`
console.log(mainNavLinks)
const Header = () => (
  <HeaderContainer>
    <div
      tw="mx-auto flex justify-between items-center rounded-lg
            md:mx-0 md:w-2/3 md:max-w-xl"
    >
      <Link to="/">
        <img alt="Susu Logo" src={Logo} />
      </Link>
      <HeaderLinkList links={mainNavLinks} />
      <Dropdownmenu />
    </div>
    <Search indices={searchIndices} />
  </HeaderContainer>
)

export default Header
