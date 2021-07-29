import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
export default function HeroImage() {
  return (
    <StaticImage
      tw="m-auto relative -top-12  
          md:absolute md:m-0 md:right-4 md:top-72
          lg:right-24 lg:top-72"
      src="../images/money-tree.png"
      alt="A young plant growing in coins"
      placeholder="blurred"
      layout="fixed"
      width={336}
      height={252}
    />
  )
}
