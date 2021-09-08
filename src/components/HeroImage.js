import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
export default function HeroImage() {
  return (
    <StaticImage
      tw="m-auto relative -top-12  
          md:absolute md:m-0 md:right-4 md:top-52
          lg:right-24"
      src="../images/money-tree.png"
      alt="A young plant growing in coins"
      placeholder="blurred"
      layout="fixed"
      width={261}
      height={193}
    />
  )
}
