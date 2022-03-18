import React from "react"
import tw from "twin.macro"

export default function ({ title, className, children }) {
  return (
    <SectionContainer className={className}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </SectionContainer>
  )
}

const SectionHeading = tw("h2")`
text-center font-bold text-primary-700
md:text-left 
`

const SectionContainer = tw("section")`
  mb-8 lg:mb-12`
