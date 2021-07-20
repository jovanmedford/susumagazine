import React from "react"
import { Global } from "@emotion/react"
import { theme, GlobalStyles } from "twin.macro"

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Global
      styles={{
        body: {
          fontFamily: theme`fontFamily.sans`,
          color: theme`textColor.base`,
          backgroundColor: theme`colors.bgColor`,
        },
      }}
    />
    {children}
  </div>
)

export default Layout
