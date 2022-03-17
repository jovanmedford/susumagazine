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
  hasUnderline,
  isReversed
}) {
  const [
    title,
    firstName,
    lastName,
    excerpt,
    image,
    authorImageSrc,
    readingTime,
    date,
  ] = cardService(data)
  const timeUnit = readingTime === "< 1" ? "min" : "mins"
  return (
    <LinkWrapper
      isLarge={isLarge}
      reverse={isReversed}
      to={data.slug}
      className={className}
    >
      <Image isFullSize={hasFullImage} src={image} />
      <ContentWrapper reverse={isReversed} hasAuthorImage={hasAuthorImage}>
        {/* <Date>
          {date} | {readingTime} {timeUnit}
        </Date> */}
        <PostTitle>{title}</PostTitle>
        {hasUnderline && <Divider />}
        <Excerpt>{excerpt}</Excerpt>
        <AuthorInfo>
            <img
              tw="mr-2 lg:mx-0 rounded-full w-1/6 lg:mb-0"
              src={authorImageSrc}
            />
          By {firstName} {lastName}
        </AuthorInfo>
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
  ${tw`md:w-2/3 flex flex-col`}

  ${({ reverse }) => reverse && tw`md:ml-4`}
  ${({ hasAuthorImage }) =>
    hasAuthorImage && tw`text-center mb-8 md:text-left md:mb-0`}
`

const PostTitle = styled("h3")`
  ${tw`text-lg 
       mt-2
       lg:text-md 
       font-bold order-1`}
`

const AuthorInfo = styled("span")`
  ${tw`flex items-center order-1`}
`
const Divider = styled("hr")`
  ${tw`mt-2 block border-2 border-primary-100 order-1`
    }
`

const Excerpt = styled("p")`
  ${tw`my-2 order-1`}
`

const Date = styled("span")`
  ${tw`justify-self-end text-light order-last md:order-first`}
`
