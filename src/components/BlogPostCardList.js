import React from "react"
import tw from "twin.macro"
import BlogPostCard from "./BlogPostCard"

const BlogPostCardContainer = tw("div")`
  flex flex-wrap mt-8 justify-center
`

const BlogPostCardList = ({ postInfoList }) => {
  const BlogPostCards = postInfoList.map(postInfo => (
    <BlogPostCard
      title={postInfo.title}
      author={postInfo.author}
      readTime={postInfo.readTime}
    />
  ))

  return <BlogPostCardContainer>{BlogPostCards}</BlogPostCardContainer>
}

export default BlogPostCardList
