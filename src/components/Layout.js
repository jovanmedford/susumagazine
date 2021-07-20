import React from "react"
import { Global } from "@emotion/react"
import tw, { css, GlobalStyles } from "twin.macro"

const customStyles = css`
  h1 {
    ${tw`text-2xl md:text-3xl font-bold`}
  }

  h2 {
    ${tw`text-xl`}
  }

  h3 {
    ${tw`text-md md:text-lg`}
  }

  body {
    ${tw`text-base-color bg-bg-color font-sans`}
  }
`
const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Global styles={customStyles} />
    {children}
  </div>
)

export default Layout
