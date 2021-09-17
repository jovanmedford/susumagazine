import React from "react"
import Image from "./Image"
import { Link } from "gatsby"
import cardService from "./cardService"
import tw, { styled } from "twin.macro"
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons"
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
  const [title, firstName, lastName, , image, authorImageSrc, readingTime] =
    cardService(data)
  const timeUnit = readingTime === "< 1" ? "min" : "mins"
  return (
    <LinkWrapper
      isLarge={isLarge}
      reverse={isReversed}
      to={data.slug}
      className={className}
    >
      {!hasAuthorImage && <Image isFullSize={hasFullImage} src={image} />}
      {hasAuthorImage && (
        <img
          tw="mx-auto mb-2 lg:mx-0 rounded-full w-1/6 lg:mb-0"
          src={authorImageSrc}
        />
      )}
      <ContentWrapper reverse={isReversed} hasAuthorImage={hasAuthorImage}>
        <PostTitle>{title}</PostTitle>
        <ReadTime>
          {readingTime} {timeUnit} /{" "}
        </ReadTime>
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
  ${({ hasAuthorImage }) =>
    hasAuthorImage && tw`text-center mb-8 md:text-left md:mb-0`}
`

const PostTitle = styled("h3")`
  ${tw`text-base lg:text-md font-semibold`}
`

const AuthorName = styled("span")`
  ${tw`text-primary-700`}
`

const ReadTime = styled("span")``
