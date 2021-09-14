import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

export default function ({ src, isFullSize }) {
  return (
    <ImageContainer fullSize={isFullSize}>
      <GatsbyImage image={src} />
    </ImageContainer>
  )
}

const ImageContainer = styled("div")`
  ${tw`mt-8 md:mt-0 w-full max-w-lg md:w-1/3`}
  ${({ fullSize }) => fullSize && tw`md:w-full`}
`
