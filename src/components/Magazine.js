import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MagazineLink } from "./StyledLinks"
import "twin.macro"

export default function Magazine({ data }) {
  const cover = getImage(data.node.localFile)
  const link = data.node.magazineDetails.link
  const year = data.node.magazineDetails.year
  return (
    <div>
      <a href={link} target="_blank">
        <GatsbyImage image={cover} />
      </a>
      <div tw="text-center">
        <h2 tw="mt-2 font-bold">{year}</h2>
        <MagazineLink href={link}>Read</MagazineLink>
      </div>
    </div>
  )
}
