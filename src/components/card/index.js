import React from "react"
import BaseCard from "./BaseCard"
import tw, { css, styled } from "twin.macro"

const StyledCard = styled(BaseCard)`
  ${tw`max-w-xs md:max-w-none mt-8 md:mt-0`}

  h3 {
    ${tw`text-base lg:text-md mt-2 font-semibold`}
  }
  span {
    ${tw`text-primary-700`}
  }

  .ImageContainer {
    ${tw`mt-8 md:mt-0`}
  }

  ${({ featured }) => (featured ? featuredStyles : null)}
`
export default function Card({ data, featured }) {
  return <StyledCard featured={featured} data={data} />
}

const featuredStyles = css`
  ${tw`md:flex md:justify-between md:w-full md:items-center`}

  h3 {
    ${tw`md:text-lg`}
  }

  .ImageContainer {
    ${tw`max-w-xs md:w-1/2 md:max-w-none`}
  }

  .Content {
    ${tw`md:w-2/5`}
  }
`
