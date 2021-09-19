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
          heading="Company"
          links={[
            { to: "/about", text: "About Us" },
            { to: "/magazinelibrary", text: "Magazine Library" },
            { to: "/contact", text: "Contact" },
          ]}
        />
        <div tw="flex items-center">
          <a href="https://www.facebook.com/officialsusumagazine/">
            <FontAwesomeIcon tw="mr-2 text-white" icon={faFacebookSquare} />
          </a>
          <a href="https://www.instagram.com/officialsusumagazine/">
            <FontAwesomeIcon tw="text-white" icon={faInstagram} />
          </a>
        </div>
      </ListWrapper>
      <span tw="mt-2 md:mt-4 block text-primary-100 text-center">
        SUSU Magazine 2021 <FontAwesomeIcon icon={faCopyright} />
      </span>
    </footer>
  )
}

export default Footer
