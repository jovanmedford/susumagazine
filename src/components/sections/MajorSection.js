import React from "react"
import tw, { styled } from "twin.macro"

export default function MajorSection({ children }) {
    return (
            <Grid>
                {children}
            </Grid>
    )
}

const Grid = styled("div")`
    ${tw`grid grid-cols-1 md:grid-cols-2`}
`