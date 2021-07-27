import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw from "twin.macro"

import { connectStateResults } from "react-instantsearch-dom"
const searchIndices = [{ name: `Posts`, title: `Posts` }]

export default function Search({ location }) {
  return (
    <Layout>
      <h1>{location.state.currentRefinement}</h1>
    </Layout>
  )
}
