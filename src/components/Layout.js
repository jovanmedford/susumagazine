import React from "react"
import { Global } from "@emotion/react"
import tw, { css, GlobalStyles } from "twin.macro"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BubbleLinkList from "./BubbleLinkList"
import searchLinks from "../data/searchLinks"

const customStyles = css`
  h1 {
    ${tw`text-2xl xl:text-3xl font-bold`}
  }

  h2 {
    ${tw`text-xl`}
  }

  h3 {
    ${tw`text-md xl:text-lg`}
  }

  body {
    ${tw`text-base-color bg-bg-color font-sans`}
  }
  .svg-inline--fa.fa-w-14 {
    width: 2rem;
    height: 2rem;
    ${tw`hover:cursor-pointer`}
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::placeholder {
    ${tw`text-light`}
  }
`

const BubbleLinksContainer = tw("div")`
  ml-8
  lg:ml-20
  xl:ml-28
`

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Global styles={customStyles} />
    <Header />
    <BubbleLinksContainer>
      <BubbleLinkList links={searchLinks} />
    </BubbleLinksContainer>
    {children}
    <Footer />
  </div>
)

export default Layout
