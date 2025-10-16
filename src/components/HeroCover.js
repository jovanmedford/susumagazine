import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
export default function HeroImage() {
  return (
      <StaticImage
        tw="w-32 m-auto m-0 ml-4 shadow-xl md:shadow-2xl hover:cursor-pointer"
        src="../images/susumagazine-2025.webp"
        alt="2023 Magazine"
        aspectRatio={0.717}
        layout="fullWidth"
      />
  )
}
