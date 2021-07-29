import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "twin.macro"
import retrieveImage from "../../utils/retrieveImage"

const BaseCard = ({ data, className }) => {
  console.log(data)
  const title = data.title
  const firstName = data.author.node.firstName
  const lastName = data.author.node.lastName
  const image = retrieveImage(data)
  return (
    <Link to={data.slug} className={className}>
      <div className="ImageContainer">
        <GatsbyImage image={image} />
      </div>
      <div className="Content">
        <h3>{title}</h3>
        <p>
          5 min /
          <span>
            {firstName} {lastName}
          </span>
        </p>
      </div>
    </Link>
  )
}

export default BaseCard
