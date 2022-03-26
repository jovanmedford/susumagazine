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
  max-width: 8rem;
  ${tw`md:mt-0 w-full`}
  ${({ fullSize }) => fullSize ? tw` max-w-none md:w-full` : tw` md:max-w-none w-1/3`}
`
