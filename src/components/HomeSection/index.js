import React from "react"
import tw, { styled } from "twin.macro"

export default function ({ title, className, children, hasFullHeight }) {
  return (
    <SectionContainer hasFullHeight={hasFullHeight} className={className}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </SectionContainer>
  )
}

const SectionHeading = styled("h2")`
 ${tw` md:my-0 mb-3 font-bold text-primary-700 text-lg lg:text-lg lg:text-xl
 md:text-left `}
`

const SectionContainer = styled("section")`
  ${tw`my-8 md:m-0`}
`
