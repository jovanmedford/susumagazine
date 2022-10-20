import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "twin.macro"
export default function HeroImage() {
  return (
    <a href="https://susu.flywheelsites.com/?page_id=773">
      <StaticImage
        tw="w-32 m-auto relative -top-2 -right-3 md:right-5 lg:absolute
          md:m-0 shadow-xl md:shadow-2xl hover:cursor-pointer"
        src="../images/2022-cover.jpg"
        alt="2021 Magazine"
        aspectRatio={0.717}
        layout="fullWidth"
      />
    </a>
  )
}
