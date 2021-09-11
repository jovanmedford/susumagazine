import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

export default function ({ src, featured }) {
  return (
    <ImageContainer featured={featured}>
      <GatsbyImage image={src} />
    </ImageContainer>
  )
}

const ImageContainer = styled("div")`
  ${tw`mt-8 md:mt-0 w-full max-w-lg md:w-1/3`}
  ${({ featured }) => featured && tw`md:w-full`}
`
