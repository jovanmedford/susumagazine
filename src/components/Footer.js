import React from "react"
import tw from "twin.macro"
import FooterLinkList from "./FooterLinkList"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const ListWrapper = tw(`div`)`
  flex flex-wrap
`
const Footer = () => {
  return (
    <footer
      tw="bg-primary-900 pt-6 pb-4 pl-12 mt-10 items-center 
          md:pl-8 lg:pl-20 xl:pl-28"
    >
      <ListWrapper>
        <FooterLinkList
          heading="Credit Unions"
          links={[
            { to: "#", text: "AGM" },
            { to: "#", text: "FSC Regulations" },
            { to: "#", text: "News" },
          ]}
        />
        <FooterLinkList
          hasMarginReset={true}
          heading="Learn"
          links={[
            { to: "#", text: "Loans" },
            { to: "#", text: "Mortgage" },
            { to: "#", text: "Savings" },
            { to: "#", text: "Budgeting" },
          ]}
        />
        <FooterLinkList
          heading="Company"
          links={[
            { to: "#", text: "Advertise" },
            { to: "#", text: "Magazine Library" },
            { to: "#", text: "Write With Us" },
            { to: "#", text: "Contact" },
          ]}
        />
        <div tw="flex items-center">
          <FontAwesomeIcon tw="mr-2 text-white" icon={faFacebookSquare} />
          <FontAwesomeIcon tw="text-white" icon={faInstagram} />
        </div>
      </ListWrapper>
      <span tw="mt-2 md:mt-4 block text-primary-100 text-center">
        SUSU Magazine 2021 <FontAwesomeIcon icon={faCopyright} />
      </span>
    </footer>
  )
}

export default Footer
