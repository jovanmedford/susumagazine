import React from "react"
import "twin.macro"
import { StaticImage } from "gatsby-plugin-image"

const Advertisement = () => (
  <div>
    <StaticImage
      tw="w-full mx-auto mt-6 md:w-3/4 lg:w-1/2
          md:rounded-lg"
      src="../images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg"
      alt="A lovely hamburger"
      placeholder="blurred"
      layout="fullWidth"
      aspectRatio={3.5 / 1}
    />
    <p tw="text-center text-light tracking-wider">Advertisement</p>
  </div>
)

export { Advertisement }
