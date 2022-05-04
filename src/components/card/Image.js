import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

export default function ({ src, isFullSize }) {
  return (
    <ImageContainer fullSize={isFullSize}>
      <ImageSubContainer>
         <GatsbyImage image={src} />
      </ImageSubContainer>
    </ImageContainer>
  )
}

const ImageContainer = styled("div")`
  max-width: 8rem; 
  ${tw`md:mt-0 w-full relative`}
  ${({ fullSize }) => fullSize ? tw` max-w-none md:w-full` : tw` md:max-w-none w-1/3`}
`
 const ImageSubContainer = styled("div")`
  ${tw``}
 `
