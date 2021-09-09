import React from "react"
import Image from "./Image"
import { Link } from "gatsby"
import cardService from "./cardService"
import tw, { styled } from "twin.macro"

export default function Card({ data, className }) {
  const [title, firstName, lastName, image] = cardService(data)
  return (
    <LinkWrapper to={data.slug} className={className}>
      <Image featured src={image} />
      <ContentWrapper>
        <PostTitle>{title}</PostTitle>
        <ReadTime>5 mins /</ReadTime>
        <AuthorName>
          {firstName} {lastName}
        </AuthorName>
      </ContentWrapper>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  ${tw`md:flex w-full`}
`

const ContentWrapper = styled("div")`
  ${tw`md:ml-4 md:self-center`}
`

const PostTitle = styled("h3")`
  ${tw`text-base lg:text-md mt-2 font-semibold`}
`

const AuthorName = styled("span")`
  ${tw`text-primary-700`}
`

const ReadTime = styled("span")``
