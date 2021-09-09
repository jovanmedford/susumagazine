import React from "react"
import Image from "./Image"
import { Link } from "gatsby"
import cardService from "./cardService"
import tw, { styled } from "twin.macro"

export default function Card({ data, className }) {
  const [title, firstName, lastName, image] = cardService(data)
  return (
    <LinkWrapper to={data.slug} className={className}>
      <Image src={image} />
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
  ${props => props.featured && tw`flex`}
`
const ContentWrapper = styled("div")``

const PostTitle = styled("h3")`
  ${tw`text-base lg:text-md mt-2 font-semibold`}
`

const AuthorName = styled("span")`
  ${tw`text-primary-700`}
`

const ReadTime = styled("span")``
