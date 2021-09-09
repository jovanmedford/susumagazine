import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

export default function ({ src, className }) {
  return (
    <ImageContainer className={className}>
      <GatsbyImage image={src} />
    </ImageContainer>
  )
}

const ImageContainer = styled("div")`
  ${tw`mt-8 md:mt-0`}

  ${props => props.featured && tw`max-w-xs md:w-1/2 md:max-w-none`}
`
