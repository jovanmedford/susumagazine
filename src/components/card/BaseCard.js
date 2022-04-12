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
  hasLargeTitle,
  flexDirection,
  isLarge,
  showExcerpt,
  hideImage,
  hideAuthorImage,
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
      flexDirection={flexDirection}
      reverse={isReversed}
      to={data.slug}
      className={className}
    >
      {!hideImage && <Image isFullSize={hasFullImage} src={image} />}
      <ContentWrapper reverse={isReversed} hasAuthorImage={hasAuthorImage}>
        {/* <Date>
          {date} | {readingTime} {timeUnit}
        </Date> */}
        <PostTitle hasLargeTitle={hasLargeTitle}>{title}</PostTitle>
        {hasUnderline && <Divider />}
        {showExcerpt && <Excerpt>{excerpt}</Excerpt>}
        <AuthorInfo>
            {!hideAuthorImage && <img
              tw="mr-2 lg:mr-2 rounded-full w-10 lg:mb-0"
              src={authorImageSrc}
            />}
          By <span tw="text-primary-700 whitespace-pre"> {firstName} {lastName}</span>
        </AuthorInfo>
      </ContentWrapper>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  ${tw`flex md:items-center font-serif`}
  ${({flexDirection}) => flexDirection === "column" ? tw`flex-col` : tw`flex-row-reverse`}
  ${({ isLarge }) => isLarge && "w-full" }
`
const ContentWrapper = styled("div")`
  ${tw`w-full flex flex-col`}
  ${({ reverse }) => reverse && tw`md:ml-4`}
  ${({ hasAuthorImage }) =>
    hasAuthorImage && tw`text-center mb-8 md:text-left md:mb-0`}
`

const PostTitle = styled("h3")`
  ${({hasLargeTitle}) => hasLargeTitle ? tw`text-lg lg:text-xl` : 
  tw`text-md md:text-lg`}
  ${tw` mt-2 mb-3 font-bold order-1`}

  ${({hasLargeTitle}) => !hasLargeTitle &&
  `overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;`}
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

BaseCard.defaultProps = {
  flexDirection: "row"
}