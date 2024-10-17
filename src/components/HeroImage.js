import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
import { Link } from "gatsby"

export default function HeroImage() {
  return (
    <Link tw="static col-span-2 transition ease-in-out bg-primary-100 hover:bg-primary-300 mt-6 mb-4 block"  to="susumagazine-2024">
      <StaticImage
        tw="w-32 m-auto relative -top-2 -left-3 md:left-5  
          md:m-0 shadow-xl md:shadow-2xl hover:cursor-pointer"
        src="../images/susumagazine-2024-v3.jpg"
        alt="2023 Magazine"
        aspectRatio={0.717}
        layout="fullWidth"
      />
    </Link>
  )
}
