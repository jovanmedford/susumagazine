import React from "react"
import Image from "./Image"
import { Link } from "gatsby"
import cardService from "./cardService"
import tw, { styled } from "twin.macro"
/**
 *
 * @param {Object} data Contains the data for a blog post
 * @param {String} className Allows for any on the fly styling to container component
 * @param {Boolean} isLarge Specifies card to take the full width of grid
 * @param {Boolean} hasFullImage True if featured image has width 100%
 * @param {Boolean} hasAuthorImage True if card has author image, featured image wil not be displayed
 * @param {Boolean} isReversed True if card has flex-direction row-reverse
 * @returns Card component
 */

export default function BaseCard({
  data,
  className,
  isLarge,
  hasFullImage,
  hasAuthorImage,
  isReversed,
}) {
  const [title, firstName, lastName, , image, authorImageSrc] =
    cardService(data)
  return (
    <LinkWrapper
      isLarge={isLarge}
      reverse={isReversed}
      to={data.slug}
      className={className}
    >
      {!hasAuthorImage && <Image isFullSize={hasFullImage} src={image} />}
      {hasAuthorImage && <img tw="rounded-full w-1/6" src={authorImageSrc} />}
      <ContentWrapper reverse={isReversed}>
        <PostTitle>{title}</PostTitle>
        <ReadTime>5 mins / </ReadTime>
        <AuthorName>
          {firstName} {lastName}
        </AuthorName>
      </ContentWrapper>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  ${tw`md:flex md:flex-row-reverse md:items-center font-serif`}

  ${({ reverse }) => reverse && tw`md:flex-row`}
  ${({ isLarge }) => isLarge && tw`lg:col-span-12`}
`
const ContentWrapper = styled("div")`
  ${tw`md:w-2/3`}

  ${({ reverse }) => reverse && tw`md:ml-4`}
`

const PostTitle = styled("h3")`
  ${tw`text-base lg:text-md mt-2 font-semibold`}
`

const AuthorName = styled("span")`
  ${tw`text-primary-700`}
`

const ReadTime = styled("span")``
