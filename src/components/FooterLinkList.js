import React from "react"
import tw, { styled } from "twin.macro"
import { FooterLink } from "./StyledLinks"

const FooterLinkContainer = styled("div")(({ hasMarginReset }) => [
  tw`list-none mr-12`,
  hasMarginReset && tw`mr-0 md:mr-12`,
])

const FooterLinkList = ({ heading, links, hasMarginReset }) => {
  const StyledLinks = links.map(link => (
    <li>
      <FooterLink key={link.text} to={link.to}>
        {link.text}
      </FooterLink>
    </li>
  ))
  return (
    <FooterLinkContainer hasMarginReset={hasMarginReset}>
      <li>
        <span tw="text-primary-300 font-bold">{heading}</span>
      </li>
      {StyledLinks}
    </FooterLinkContainer>
  )
}

export default FooterLinkList
