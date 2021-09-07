import React from "react"
import tw, { styled } from "twin.macro"
import Card from "./card/index"

const BlogPostCardContainer = styled("div")`
  ${tw`md:flex md:flex-row md:justify-between md:mt-8 md:mx-0`}

  a {
    @media screen and (min-width: 768px) {
      flex-basis: 32.8%;
    }
  }
`

const BlogPostCardList = ({ featuredPostData, postDataList }) => {
  const BlogPostCards = postDataList.map(postData => <Card data={postData} />)
  return (
    <div tw="mt-8 w-10/12 max-w-xs mx-auto mt-8 md:mx-8 md:max-w-none lg:ml-20">
      {featuredPostData ? (
        <Card featured={true} data={featuredPostData} />
      ) : null}
      <BlogPostCardContainer>{BlogPostCards}</BlogPostCardContainer>
    </div>
  )
}

export default BlogPostCardList
