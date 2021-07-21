import React from "react"
import tw from "twin.macro"
import { BubbleLink } from "./StyledLinks"

/**
 * Takes in a set of links and outputs
 * @param {*} param0
 */

const BubbleLinkList = ({ links }) => {
  const styledLinks = links.map(link => (
    <BubbleLink isActive={link.isActive} key={link.text} to={link.to}>
      {link.text}
    </BubbleLink>
  ))
  return <LinkList>{styledLinks}</LinkList>
}

const LinkList = tw("ul")`
  mt-4 overflow-x-scroll flex
`

export default BubbleLinkList
