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
  lg:w-1/2
  mt-8 w-10/12 max-w-xs mx-auto mt-8 md:mx-8 md:max-w-none lg:ml-20
`
