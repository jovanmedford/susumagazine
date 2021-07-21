import React from "react"
import tw from "twin.macro"
import { BubbleLink } from "./StyledLinks"

/**
 * Takes in a set of links and outputs
 * @param {*} param0
 */

const BubbleLinkList = ({ links }) => {
  const styledLinks = links.map(link => (
    <BubbleLink key={link.text} to={link.to}>
      {link.text}
    </BubbleLink>
  ))
  return <LinkList>{styledLinks}</LinkList>
}

const LinkList = tw("ul")`
  ml-8 overflow-x-scroll flex
`

export default BubbleLinkList
