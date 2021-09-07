import React from "react"
import { Global } from "@emotion/react"
import tw, { css, GlobalStyles } from "twin.macro"
import Header from "../components/Header"
import Footer from "../components/Footer"

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

  .content {
    flex: 1 0 auto;
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

const PageWrapper = tw("div")`
 flex flex-col min-h-screen
`

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Global styles={customStyles} />
    <PageWrapper>
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </PageWrapper>
  </div>
)

export default Layout
