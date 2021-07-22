import React from "react"
import { FlowerGraphSmall } from "./FlowerGraph"
import "twin.macro"

const BlogPostCard = ({ title, author, readTime }) => {
  return (
    <div tw="w-56 mb-6">
      <FlowerGraphSmall />
      <h3 tw="mt-2">{title}</h3>
      <p>
        {readTime} min read / <span tw="text-primary-700"> {author}</span>
      </p>
    </div>
  )
}

export default BlogPostCard
