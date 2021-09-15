import React from "react"
import tw, { styled } from "twin.macro"
import Card from "./card/index"

const BlogPostCardList = ({ postDataList, type }) => {
  const BlogPostCards = postDataList.map(postData => (
    <Card data={postData} type={type} />
  ))
  return <BlogPostCardContainer>{BlogPostCards}</BlogPostCardContainer>
}

const BlogPostCardContainer = styled("div")`
  ${tw`md:flex md:flex-col md:justify-between md:mt-8 md:mx-0`}
  gap: 1rem;
`

export default BlogPostCardList
