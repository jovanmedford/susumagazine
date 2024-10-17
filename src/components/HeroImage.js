import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
export default function HeroImage() {
  return (
    <a href="https://online.fliphtml5.com/bkdcf/calo/#p=1">
      <StaticImage
        tw="w-32 m-auto relative -top-2 -left-3 md:left-5  
          md:m-0 shadow-xl md:shadow-2xl hover:cursor-pointer"
        src="../images/susumagazine-2024-v3.jpg"
        alt="2023 Magazine"
        aspectRatio={0.717}
        layout="fullWidth"
      />
    </a>
  )
}
