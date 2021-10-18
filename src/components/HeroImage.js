import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw from "twin.macro"
export default function HeroImage() {
  return (
    <a href="https://susu.flywheelsites.com/?page_id=472" target="_blank">
      <StaticImage
        tw="w-40 md:w-48 lg:w-52 m-auto relative -top-12  
          md:absolute md:m-0 md:right-12 lg:right-40 md:top-28
          lg:right-36 shadow-xl md:shadow-2xl hover:cursor-pointer"
        src="../images/susumagazine2021-small.jpg"
        alt="2021 Magazine"
        aspectRatio={0.717}
        layout="fullWidth"
      />
    </a>
  )
}
