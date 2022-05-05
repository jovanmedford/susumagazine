import React from "react"
import tw from "twin.macro"
import { BubbleLink } from "./StyledLinks"

/**
 * Takes in a set of links and outputs
 * @param {*} param0
 */

const BubbleLinkList = ({ links, className }) => {
  const styledLinks = links.map(link => (
    <BubbleLink isActive={link.isActive} key={link.text} to={link.to}>
      {link.text}
    </BubbleLink>
  ))
  return <LinkList className={className}>{styledLinks}</LinkList>
}

const LinkList = tw("ul")`
flex flex-wrap justify-start 
`

export default BubbleLinkList
