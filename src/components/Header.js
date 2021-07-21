import * as React from "react"
import Logo from "../images/susu-website-logo.png"
import tw from "twin.macro"
import Dropdownmenu from "./Dropdownmenu"

const HeaderContainer = tw.div`
  mt-4 mx-8 flex justify-between items-center
`

const Header = () => (
  <HeaderContainer>
    <img src={Logo} />
    <Dropdownmenu />
  </HeaderContainer>
)

export default Header
