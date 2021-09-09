import React from "react"
import tw, { styled } from "twin.macro"
import Card from "./card/index"

const BlogPostCardList = ({ postDataList }) => {
  const BlogPostCards = postDataList.map(postData => <Card data={postData} />)
  return <BlogPostCardContainer>{BlogPostCards}</BlogPostCardContainer>
}

const BlogPostCardContainer = styled("div")`
  ${tw`md:flex md:flex-row md:justify-between md:mt-8 md:mx-0`}

  a {
    @media screen and (min-width: 768px) {
      flex-basis: 32.8%;
    }
  }
`

export default BlogPostCardList
