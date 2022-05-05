import React from "react"
import tw from "twin.macro"
import InstitutionCard from "../card/InstitutionCard"

export default function InstitutionSection({ institutions }) {
    return (
      <section tw="mx-4 mt-8 lg:mx-20 md:mx-8 xl:mx-28 md:my-8 lg:my-24">
          <SectionHeading>By Institutions</SectionHeading>
          <div tw="text-left md:flex md:flex-row justify-between">
              {institutions.map(institution => (
                  <InstitutionCard institution={institution} />
              ))}
          </div>
      </section>
    )
  }

const SectionHeading = tw("h2")`
text-left font-bold text-primary-700 text-lg lg:text-xl
mb-8
`