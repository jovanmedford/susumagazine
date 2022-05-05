import React from "react"
import tw, { styled } from "twin.macro"

export default function MajorSection({ className, children }) {
    return (
            <Grid className={className}>
                {children}
            </Grid>
    )
}

const Grid = styled("div")`
    ${tw`
        mx-4 md:mx-8 lg:mx-20 xl:mx-28
        grid grid-cols-1 md:grid-cols-2 mt-8`}
`