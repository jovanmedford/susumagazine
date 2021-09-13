import React from "React"
import tw from "twin.macro"

export default function ({ title, children }) {
  return (
    <SectionContainer>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </SectionContainer>
  )
}

const SectionHeading = tw("h2")`
text-center font-bold text-primary-700
mt-10 md:mt-8 md:text-left 
`

const SectionContainer = tw("section")`
  mt-8  mt-8 
`
