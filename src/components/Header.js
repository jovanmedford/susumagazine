import * as React from "react"
import Logo from "../images/susu-website-logo.png"
import tw, { styled, css } from "twin.macro"
import Dropdownmenu from "./Dropdownmenu"
import HeaderLinkList from "./HeaderLinkList"
import Search from "./search"
import mainNavLinks from "../data/mainNavLinks"
import { Link } from "gatsby"

const searchIndices = [{ name: `Posts`, title: `Posts` }]

const HeaderContainer = styled("div")`
  ${tw`mt-4 mx-8 lg:mx-20 xl:mx-28`}
  display: grid;
  grid-template-areas:
    "Logo Dropdown"
    "SearchBox SearchBox";
  .SearchContainer {
    grid-area: SearchBox;
  }

  .Logo {
    grid-area: Logo;
  }

  .DropdownContainer {
    grid-area: Dropdown;
    justify-self: flex-end;
  }

  .LinksContainer {
    grid-area: Links;
    align-self: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-areas: "Logo Links Links Links SearchBox SearchBox";
  }
`

const Header = () => (
  <HeaderContainer>
    <Link className="Logo" to="/">
      <img alt="Susu Logo" src={Logo} />
    </Link>
    <HeaderLinkList className="LinksContainer" links={mainNavLinks} />
    <Dropdownmenu className="DropdownContainer" />
    <Search className="SearchContainer" indices={searchIndices} />
  </HeaderContainer>
)

export default Header
