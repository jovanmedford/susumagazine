import React from "React"
import tw from "twin.macro"

export default function ({ title, children }) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  )
}

const SectionHeading = tw("h2")`
text-center font-bold text-primary-700
mt-10 md:mt-8 md:text-left md:ml-8
lg:ml-20 
`

const SectionContainer = tw("section")`
  lg:w-2/3
`
