import React from "react"
import { HeaderLink } from "./StyledLinks"
import tw from "twin.macro"

const HeaderLinksContainer = tw("ul")`
 hidden md:flex
`
const HeaderLinkList = ({ links }) => {
  const StyledLinks = links.map(link => (
    <HeaderLink key={link.text} to={link.to}>
      {link.text}
    </HeaderLink>
  ))
  return <HeaderLinksContainer>{StyledLinks}</HeaderLinksContainer>
}

export default HeaderLinkList
