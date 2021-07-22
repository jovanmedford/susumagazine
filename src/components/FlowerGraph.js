import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FlowerGraphSmall = () => {
  return (
    <StaticImage
      src="../images/flower-graph.jpg"
      alt="A bar chart made of flowers"
      placeholder="blurred"
      layout="fixed"
      width={224}
      height={126}
    />
  )
}

const FlowerGraphLarge = () => {
  return (
    <StaticImage
      src="../images/flower-graph.jpg"
      alt="A big bar chart made of flowers"
      placeholder="blurred"
      layout="fixed"
      width={288}
      height={162}
    />
  )
}

export { FlowerGraphSmall, FlowerGraphLarge }
